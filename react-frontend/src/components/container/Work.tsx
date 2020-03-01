import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Work() {
  return (
    <Typography
      component="div"
      color="textSecondary"
      style={{ minHeight: "100vh" }}
    >
      <Box
        fontSize="h2.fontSize"
        fontWeight="fontWeightLight"
        letterSpacing={8}
      >
        Work
      </Box>
      <Box
        fontSize="overline.fontSize"
        fontWeight="fontWeightLight"
        letterSpacing={2}
      >
        -コンテンツ-
      </Box>
      <Box fontSize="h6.fontSize" mt={3}>
        coming soon..
      </Box>
    </Typography>
  );
}
