import React from "react";
/** @jsx jsx */
import { jsx, Flex, Text } from "theme-ui";
import { MdAccessTime as DurationIcon } from "react-icons/md";
// import { toHHMM } from "../../utils/format-duration";

const TotalDuration = ({ totalDuration }) => {
  return (
    <Flex sx={{ alignItems: "center" }}>
      <DurationIcon sx={{ color: "primary", mr: 2 }} />
      <Text as="time" variant="caps" sx={{ color: "heading", fontSize: 2 }}>
        {totalDuration}
      </Text>
    </Flex>
  );
};

export default TotalDuration;
