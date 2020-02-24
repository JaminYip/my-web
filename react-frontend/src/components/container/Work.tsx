import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Work() {
  return (
    <Container>
      <Typography gutterBottom style={{ minHeight: "100vh" }}>
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
    </Container>
  );
}
