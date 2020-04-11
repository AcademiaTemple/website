import React from "react";
import Img from "gatsby-image";
/** @jsx jsx */
import { jsx, Flex, Text, Link } from "theme-ui";

const Author = ({ name, bio, avatar, link }) => {
  return (
    <Flex my={4} sx={{ flexDirection: ["column", "row"] }}>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          mr: [0, 3],
          mb: [2, 0],
          minWidth: 75,
        }}
      >
        <Img
          sx={{ borderRadius: "100%" }}
          fixed={avatar.childImageSharp.fixed}
          alt="Author avatar"
        />
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <div>
          <Link href={link} target="_blank">
            <Flex
              sx={{
                fontWeight: "heading",
                justifyContent: ["center", "flex-start"],
              }}
            >
              {name}
            </Flex>
          </Link>
        </div>
        <Text
          variant="body"
          sx={{
            textAlign: ["center", "left"],
          }}
        >
          {bio}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Author;
