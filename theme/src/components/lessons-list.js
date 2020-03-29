import React, { useEffect, useRef } from "react";
/** @jsx jsx */
import { jsx, Flex, Grid, Text } from "theme-ui";
import { MdAccessTime as DurationIcon } from "react-icons/md";
import Link from "../components/link";

const LessonsList = ({ lessons, id }) => {
  const lessonRef = useRef();

  useEffect(() => {
    if (lessonRef.current) {
      lessonRef.current.scrollIntoView({
        behavior: "auto",
        block: "start"
      });
    }
  }, [lessonRef]);

  return lessons.map((lesson, index) => {
    const active = lesson.id === id;
    return (
      <div ref={active ? lessonRef : null}>
        <Grid
          as={Link}
          to={lesson.slug}
          gap={2}
          columns={[1, 1, 1, 1, "1fr 70px"]}
          p={3}
          mx={id ? 0 : -3}
          bg={active ? "gray.1" : "transparent"}
          sx={{
            "&&:hover": {
              bg: ["transparent", "gray.0"],
              borderRadius: 4
            }
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
                  color: "gray.7",
                  px: 2,
                  mr: 2,
                  borderRadius: 4,
                  fontSize: 1
                }}
              >
                {index + 1}
              </Text>
              <Text variant="body" sx={{ fontWeight: "bold" }}>
                {lesson.title}
              </Text>
            </Flex>
            <Text variant="body" sx={{ color: "gray.7" }}>
              {lesson.description}
            </Text>
          </Flex>
          <Flex
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              color: "gray.7",
              display: ["none", "none", "none", "none", "flex"]
            }}
          >
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
                bg: "gray.2",
                px: 1,
                borderRadius: 4
              }}
            >
              <DurationIcon sx={{ mr: 1 }} />
              <Text as="time" variant="caps" sx={{ fontSize: 1 }}>
                {lesson.duration}
              </Text>
            </Flex>
          </Flex>
        </Grid>
      </div>
    );
  });
};

export default LessonsList;
