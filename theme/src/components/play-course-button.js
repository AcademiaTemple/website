import React from "react";
/** @jsx jsx */
import { jsx, Text, Button } from "theme-ui";
import Link from "../components/link";
import { MdPlayArrow as PlayIcon } from "react-icons/md";

const PlayCourseButton = ({ slug, text = "PLAY COURSE" }) => {
  return (
    <Button as={Link} to={slug} sx={{ width: ["100%", "auto"], mb: [3, 0] }}>
      <PlayIcon sx={{ color: "white", mr: 2 }} size={24} />
      <Text variant="caps" sx={{ pr: 2 }}>
        {text}
      </Text>
    </Button>
  );
};

export default PlayCourseButton;
