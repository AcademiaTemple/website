/** @jsx jsx */
import { jsx } from "theme-ui";
import { preToCodeBlock } from "mdx-utils";
import PrismCodeBlock from "@theme-ui/prism";

const CodeBlock = preProps => {
  const props = preToCodeBlock(preProps);

  if (props) {
    const { codeString, ...restProps } = props;

    return (
      <PrismCodeBlock {...restProps} sx={{ px: 3, py: 2, borderRadius: 4 }}>
        {codeString}
      </PrismCodeBlock>
    );
  } else {
    return <pre {...preProps} sx={{ px: 3, py: 2, borderRadius: 4 }} />;
  }
};

export default {
  pre: CodeBlock
};
