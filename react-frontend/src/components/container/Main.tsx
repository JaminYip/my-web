import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import About from "./About";
import Skills from "./Skills";
import History from "./History";
import Works from "./Works";

enum ContainerIndex {
  About,
  Skills,
  History,
  Works
}

interface Props {
  containerIndex: number;
}

export default function Main(props: Props) {
  return (
    <Container>
      <CssBaseline />
      <Typography color="textSecondary" style={{ backgroundColor: "#ffffff" }}>
        {(function() {
          switch (props.containerIndex) {
            case ContainerIndex.About:
              return <About />;
            case ContainerIndex.Skills:
              return <Skills />;
            case ContainerIndex.History:
              return <History />;
            case ContainerIndex.Works:
              return <Works />;
            default:
              return <React.Fragment />;
          }
        })()}
      </Typography>
    </Container>
  );
}
