const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const debug = Debug(`gatsby-theme-courses`);
const withDefaults = require(`./utils/default-options`);
const sanitizeSlug = require("./utils/sanitize-slug");
const { toSeconds, toHoursMinutes } = require("./utils/format-duration");

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState();
  const { coursesPath, authorsPath } = withDefaults(themeOptions);

  const dirs = [
    path.join(program.directory, coursesPath),
    path.join(program.directory, authorsPath)
  ];

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName
  });
  return result;
};

exports.createSchemaCustomization = ({ getNodesByType, actions, schema }) => {
  const { createTypes } = actions;
  createTypes(
    schema.buildObjectType({
      name: `Lesson`,
      fields: {
        id: { type: `ID!` },
        slug: {
          type: `String!`
        },
        title: {
          type: `String!`
        },
        description: {
          type: `String!`
        },
        number: {
          type: `Int`
        },
        video: {
          type: `String!`
        },
        duration: {
          type: `String!`
        },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140
            }
          },
          resolve: mdxResolverPassthrough(`excerpt`)
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`)
        },
        frontmatter: {
          type: `MdxFrontmatter`,
          resolve: mdxResolverPassthrough(`frontmatter`)
        }
      },
      interfaces: [`Node`]
    })
  );
  createTypes(
    schema.buildObjectType({
      name: `Course`,
      fields: {
        id: { type: `ID!` },
        slug: {
          type: `String!`
        },
        title: {
          type: `String!`
        },
        description: {
          type: `String!`
        },
        author: {
          type: `AuthorsYaml!`,
          resolve: source =>
            getNodesByType(`AuthorsYaml`).find(
              author => author.name === source.author
            )
        },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140
            }
          },
          resolve: mdxResolverPassthrough(`excerpt`)
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`)
        },
        frontmatter: {
          type: `MdxFrontmatter`,
          resolve: mdxResolverPassthrough(`frontmatter`)
        },
        lessons: {
          type: `[Lesson!]`,
          resolve: source => {
            const lessons = getNodesByType(`Lesson`);
            if (lessons.every(lesson => !lesson.number))
              return lessons.sort((a, b) => (a.slug > b.slug ? 1 : -1));
            else return lessons.sort((a, b) => (a.number > b.number ? 1 : -1));
          }
        },
        cover: {
          type: `File!`
        }
      },
      interfaces: [`Node`]
    })
  );
};

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions;
  const { coursesPath } = withDefaults(themeOptions);

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create source field (according to coursesPath)
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  // Make sure the source is coursesPath
  if (source !== coursesPath) {
    return;
  }

  if (fileNode.name === `index`) {
    // Create course node
    const slug = node.frontmatter.slug
      ? sanitizeSlug(node.frontmatter.slug)
      : createFilePath({
          node: fileNode,
          getNode,
          basePath: coursesPath
        });

    const { title, description, cover, author } = node.frontmatter;

    const fieldData = {
      slug,
      title,
      description,
      cover,
      author
    };

    createNode({
      ...fieldData,
      // Required fields
      id: createNodeId(`${node.id} >>> Course`),
      parent: node.id,
      children: [],
      internal: {
        type: `Course`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Courses`
      }
    });
    createParentChildLink({ parent: fileNode, child: node });
  } else {
    // Create lesson node
    const slug = node.frontmatter.slug
      ? `/${fileNode.relativeDirectory}${sanitizeSlug(node.frontmatter.slug)}`
      : createFilePath({
          node: fileNode,
          getNode,
          basePath: coursesPath
        });

    const { title, description, video, number, duration } = node.frontmatter;

    const fieldData = {
      slug,
      title,
      duration,
      video,
      number,
      description
    };

    createNode({
      ...fieldData,
      // Required fields
      id: createNodeId(`${node.id} >>> Lesson`),
      parent: node.id,
      children: [],
      internal: {
        type: `Lesson`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Lessons`
      }
    });
    createParentChildLink({ parent: fileNode, child: node });
  }
};

const CourseTemplate = require.resolve(`./src/templates/course-query.js`);
const LessonTemplate = require.resolve(`./src/templates/lesson-query.js`);
const CoursesTemplate = require.resolve(`./src/templates/courses-query.js`);

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions;
  const { basePath } = withDefaults(themeOptions);
  const result = await graphql(`
    {
      allCourse {
        edges {
          node {
            id
            slug
            lessons {
              id
              slug
              title
              description
              duration
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic(result.errors);
  }

  // Create courses and lessons pages.
  const { allCourse } = result.data;
  const courses = allCourse.edges;
  // Create a page for each course
  courses.forEach(({ node }, index) => {
    const { id, slug, lessons } = node;
    createPage({
      path: slug,
      component: CourseTemplate,
      context: {
        id,
        totalLessons: node.lessons.length,
        totalDuration: toHoursMinutes(
          node.lessons
            .map(lesson => toSeconds(lesson.duration))
            .reduce((a, b) => a + b)
        )
      }
    });
    // Create a page for each lesson
    lessons.forEach(lesson => {
      createPage({
        path: lesson.slug,
        component: LessonTemplate,
        context: {
          id: lesson.id,
          lessons
        }
      });
    });
  });
  // Create the courses page
  createPage({
    path: basePath,
    component: CoursesTemplate,
    context: {}
  });
};
