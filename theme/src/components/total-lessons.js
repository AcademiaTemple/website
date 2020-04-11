import React from "react";
/** @jsx jsx */
import { jsx, Flex, Text } from "theme-ui";
import { MdLayers as LessonsIcon } from "react-icons/md";

const TotalLessons = ({ totalLessons }) => {
  return (
    <Flex sx={{ alignItems: "center" }} mr={4}>
      <LessonsIcon sx={{ color: "primary", mr: 2 }} />
      <Text variant="caps" sx={{ color: "heading", fontSize: 2 }}>
        {totalLessons} lessons
      </Text>
    </Flex>
  );
};

export default TotalLessons;
