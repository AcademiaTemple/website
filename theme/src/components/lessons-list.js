import React, { useEffect, useRef } from "react";
import { Flex, Box, Grid, Text } from "theme-ui";
import Link from "../components/link";

const LessonsList = ({ lessons, slug }) => {
  const lessonRef = useRef();

  useEffect(() => {
    if (lessonRef.current) {
      lessonRef.current.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  }, [lessonRef]);

  return lessons.map((lesson, index) => {
    const active = lesson.slug === slug;
    return (
      <div ref={active ? lessonRef : null} key={lesson.slug}>
        <Grid
          as={Link}
          to={lesson.slug}
          gap={2}
          columns={[1, 1, 1, 1, "1fr 70px"]}
          p={3}
          mx={slug ? 0 : -3}
          bg={active ? "gray.1" : "transparent"}
          sx={{
            "&&:hover": {
              bg: ["transparent", "gray.0"],
              borderRadius: 4,
            },
          }}
        >
          <Flex sx={{ flexDirection: "column" }}>
            <Flex sx={{ alignItems: "center" }}>
              <Text
                variant="caps"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bg: "gray.2",
                  color: "text",
                  px: 2,
                  mr: 2,
                  borderRadius: 4,
                  fontSize: 1,
                }}
              >
                {index + 1}
              </Text>
              <Text
                variant="body"
                sx={{ fontWeight: "bold", color: "heading" }}
              >
                {lesson.title}
              </Text>
            </Flex>
            <Text variant="body">{lesson.description}</Text>
          </Flex>
          <Box
            sx={{
              display: ["none", "none", "none", "none", "flex"],
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              color: "text",
            }}
          >
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
                bg: "gray.2",
                px: 1,
                borderRadius: 4,
              }}
            >
              <Text as="time" variant="caps" sx={{ fontSize: 1 }}>
                {lesson.duration}
              </Text>
            </Flex>
          </Box>
        </Grid>
      </div>
    );
  });
};

export default LessonsList;
