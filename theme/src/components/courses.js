import React from "react";
import { Container, Grid } from "theme-ui";
import Card from "../components/card";

const Courses = ({ data }) => {
  const courses = data.allCourse.edges;
  return (
    <Container variant="containerWide">
      <Grid gap={4} columns={[1, 2, 2, 3]}>
        {courses.map(({ node }) => {
          return <Card {...node} />;
        })}
      </Grid>
    </Container>
  );
};

export default Courses;
