import React from "react";
import Img from "gatsby-image";
import Link from "../components/link";
/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";

const Card = ({ slug, cover, title, description }) => {
  return (
    <Box as={Link} to={slug} bg="background">
      <Img
        sx={{ borderRadius: 4 }}
        fluid={cover.childImageSharp.fluid}
        alt="cover image"
      />
      <Box>
        <Heading my={2}>{title}</Heading>
        <Text variant="body" sx={{ color: "gray.7" }}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
