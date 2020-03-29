import React from "react";
/** @jsx jsx */
import { jsx, Flex, Container, Styled } from "theme-ui";
import PlayCourseButton from "./play-course-button";
import TotalLessons from "./total-lessons";
import TotalDuration from "./total-duration";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Author from "../components/author";
import HeadingLessons from "./heading-lessons";
import LessonsList from "../components/lessons-list";

const Course = ({
  data: { course },
  pageContext: { totalLessons, totalDuration }
}) => {
  return (
    <Container>
      <Styled.h1>{course.title}</Styled.h1>

      <Flex sx={{ alignItems: "center", flexWrap: "wrap", my: 4 }}>
        <PlayCourseButton slug={course.lessons[0].slug} text="PLAY COURSE" />

        <div sx={{ flexGrow: 1 }} />

        <Flex
          sx={{
            width: ["100%", "auto"],
            justifyContent: ["center", "flex-start"]
          }}
        >
          <TotalLessons totalLessons={totalLessons} />
          <TotalDuration totalDuration={totalDuration} />
        </Flex>
      </Flex>

      <MDXRenderer>{course.body}</MDXRenderer>

      <Author {...course.author} />

      <HeadingLessons>Course outline</HeadingLessons>

      <LessonsList lessons={course.lessons} />
    </Container>
  );
};

export default Course;
