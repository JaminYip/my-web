import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Portfolio from "../work/Portfolio";
import NewApp from "../work/NewApp";

export default function Work() {
  return (
    <React.Fragment>
      <Typography component="div" gutterBottom style={{ color: "#cfd8dc" }}>
        <Box
          fontSize="h6.fontSize"
          fontWeight="fontWeightLight"
          letterSpacing={4}
        >
          WORK
        </Box>
        <Box fontSize={10} fontWeight="fontWeightLight" letterSpacing={2}>
          -個人制作-
        </Box>
      </Typography>
      <Container maxWidth="md" style={{ background: "#f4f5f7" }}>
        <br />
        <Typography component="div" color="textSecondary">
          <Grid container spacing={3} justify="center">
            <Portfolio />
            <NewApp />
          </Grid>
        </Typography>
        <br />
      </Container>
    </React.Fragment>
  );
}
