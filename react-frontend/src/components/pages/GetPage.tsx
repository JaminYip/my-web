import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AboutPage from "./AboutPage";
import HistoryPage from "./HistoryPage";

enum Page {
  About,
  Skills,
  History,
  Works
}

export default function GetPage(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{
            backgroundColor: "#ffffff",
            color: "#555555",
            height: "100vh"
          }}
        >
          {(function() {
            switch (props.pageIndex) {
              case Page.About:
                return <AboutPage />;
              case Page.Skills:
                return <div>Skills</div>;
              case Page.History:
                return <HistoryPage />;
              case Page.Works:
                return <div>Works</div>;
              default:
                return <React.Fragment />;
            }
          })()}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
