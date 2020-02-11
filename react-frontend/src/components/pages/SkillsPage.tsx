import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function SkillsPage() {
  return (
    <Container>
      <Typography gutterBottom style={{ height: "100vh" }}>
        <Box
          fontSize="h2.fontSize"
          fontWeight="fontWeightLight"
          letterSpacing={8}
        >
          Skills
        </Box>
        <Box
          fontSize="overline.fontSize"
          fontWeight="fontWeightLight"
          letterSpacing={2}
        >
          -スキルセット-
        </Box>
        <br />
      </Typography>
    </Container>
  );
}
