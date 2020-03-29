import React from "react";
/** @jsx jsx */
import { jsx, Flex, Box, Container, AspectRatio } from "theme-ui";
import { useMeasure } from "react-use";
import LessonsList from "../components/lessons-list";
import Player from "../components/player";
import LessonContent from "./lesson-content";

const Lesson = ({ data, pageContext: { lessons }, ...props }) => {
  const [ref, { height }] = useMeasure();

  return (
    <>
      <Flex sx={{ p: 3, flexDirection: ["column", "column", "column", "row"] }}>
        <Box sx={{ width: ["100%", "100%", "100%", "70%"], bg: "#fafafa" }}>
          <AspectRatio ratio={16 / 9} ref={ref}>
            <Player url={data.lesson.video} />
          </AspectRatio>
        </Box>
        <Box
          sx={{
            height,
            width: ["100%", "100%", "100%", "30%"],
            overflowY: "auto",
            minHeight: [300, "auto"],
            borderTopWidth: 1,
            borderTopStyle: "solid",
            borderTopColor: "gray.2",
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "gray.2"
          }}
        >
          <LessonsList lessons={lessons} id={data.lesson.id} />
        </Box>
      </Flex>
      <Container>
        <LessonContent
          slug={data.lesson.slug}
          title={data.lesson.title}
          body={data.lesson.body}
        />
      </Container>
    </>
  );
};

export default Lesson;
