import { graphql } from "gatsby";
import Course from "../components/course";

export default Course;

export const query = graphql`
  query CourseQuery($id: String) {
    course(id: { eq: $id }) {
      title
      description
      body
      author {
        name
        bio
        avatar {
          childImageSharp {
            fixed(width: 75, height: 75, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        link
      }
      lessons {
        id
        slug
        title
        number
        duration
        description
      }
    }
  }
`;
