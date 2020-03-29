import React from "react";
import { Styled } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";

const LessonContent = ({ title, body }) => {
  return (
    <>
      <Styled.h1>{title}</Styled.h1>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  );
};

export default LessonContent;
