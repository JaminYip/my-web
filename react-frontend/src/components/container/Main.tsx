import React from "react";
import Container from "@material-ui/core/Container";
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
    <Container style={{ marginTop: 25 }}>
      <Typography color="textSecondary" style={{ backgroundColor: "white" }}>
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
