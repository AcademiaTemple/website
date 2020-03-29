import { graphql } from "gatsby";
import Courses from "../components/courses";

export default Courses;

export const query = graphql`
  query CoursesQuery {
    allCourse {
      edges {
        node {
          slug
          title
          description
          cover {
            childImageSharp {
              fluid(maxWidth: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
