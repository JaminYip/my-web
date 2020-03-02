import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Portfolio from "../work/Portfolio";
import NewApp from "../work/NewApp";

export default function Work() {
  return (
    <Typography
      component="div"
      color="textSecondary"
      style={{ minHeight: "180vmin" }}
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
      <br />
      <Container>
        <Grid container spacing={3} justify="center">
          <Portfolio />
          <NewApp />
        </Grid>
      </Container>
    </Typography>
  );
}
