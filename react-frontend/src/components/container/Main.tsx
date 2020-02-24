import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import About from "./About";
import Skills from "./Skills";
import History from "./History";
import Work from "./Work";

enum ContainerIndex {
  About,
  Skills,
  History,
  Work
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
            case ContainerIndex.Work:
              return <Work />;
            default:
              return <React.Fragment />;
          }
        })()}
      </Typography>
    </Container>
  );
}
