import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import HistoryPage from "./HistoryPage";
import WorksPage from "./WorksPage";

enum Page {
  About,
  Skills,
  History,
  Works
}

interface Props {
  pageIndex: number;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#ffffff"
    }
  })
);

export default function GetPage(props: Props) {
  const classes = useStyles();

  return (
    <Container>
      <CssBaseline />
      <Typography
        component="div"
        color="textSecondary"
        className={classes.root}
      >
        {(function() {
          switch (props.pageIndex) {
            case Page.About:
              return <AboutPage />;
            case Page.Skills:
              return <SkillsPage />;
            case Page.History:
              return <HistoryPage />;
            case Page.Works:
              return <WorksPage />;
            default:
              return <React.Fragment />;
          }
        })()}
      </Typography>
    </Container>
  );
}
