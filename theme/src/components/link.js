/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export default props => (
  <Link
    {...props}
    // activeClassName="active"
    sx={{
      textDecoration: "none",
      color: "inherit"
      //   "&.active": {
      //     color: "primary"
      //   }
    }}
  />
);
