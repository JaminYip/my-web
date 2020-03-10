import React, { useRef } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Top from "./container/Top";
import About from "./container/About";
import Skills from "./container/Skills";
import History from "./container/History";
import Work from "./container/Work";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

window.addEventListener("scroll", () => {
  if (
    document.getElementById("aboutDiv") === null ||
    document.getElementById("skillsDiv") === null ||
    document.getElementById("historyDiv") === null ||
    document.getElementById("workDiv") === null
  ) {
    return;
  }
  document.body.style.transition = "1s";
  if (document.getElementById("workDiv")!.getBoundingClientRect().top <= 1) {
    document.body.style.backgroundColor = "#000000";
  } else if (
    document.getElementById("historyDiv")!.getBoundingClientRect().top <= 1
  ) {
    document.body.style.backgroundColor = "#3a3d20";
  } else if (
    document.getElementById("skillsDiv")!.getBoundingClientRect().top <= 1
  ) {
    document.body.style.backgroundColor = "#3d203a";
  } else if (
    document.getElementById("aboutDiv")!.getBoundingClientRect().top <= 1
  ) {
    document.body.style.backgroundColor = "#203a3d";
  } else {
    document.body.style.backgroundColor = "#000000";
  }
});

window.addEventListener("wheel", () => {
  setScrollState(null);
});

window.addEventListener("touchmove", () => {
  setScrollState(null);
});

let scrollState: boolean[] = [false, false, false, false, false];
const setScrollState = (scrollEventIndex: number | null) => {
  for (let i = 0; i < scrollState.length; i++) {
    if (i === scrollEventIndex) {
      scrollState[i] = true;
    } else {
      scrollState[i] = false;
    }
  }
};

const scrollToRef = (
  ref: any | null,
  clickPositionY: number,
  targetPositionY: number,
  scrollEventIndex: number
) => {
  if (ref === "top") {
    targetPositionY = 0;
  } else if (targetPositionY === 0) {
    targetPositionY = ref.current.offsetTop || 0;
  }
  if (targetPositionY !== clickPositionY) {
    if (scrollState[scrollEventIndex]) {
      setTimeout(() => {
        if (targetPositionY - clickPositionY > 0) {
          const arriveTargetOffset: number = targetPositionY - clickPositionY;
          const calcOffset: number = Number(
            (arriveTargetOffset / 10).toFixed(1)
          );
          if (calcOffset > 10) {
            clickPositionY += Number((arriveTargetOffset / 45).toFixed(1));
          } else if (calcOffset > 5) {
            clickPositionY += Number((arriveTargetOffset / 50).toFixed(1));
          } else if (calcOffset > 1) {
            clickPositionY += Number((arriveTargetOffset / 55).toFixed(2));
          } else if (calcOffset > 0) {
            clickPositionY += 0.1;
          } else {
            clickPositionY = targetPositionY;
          }
        } else {
          const arriveTargetOffset: number = clickPositionY - targetPositionY;
          const calcOffset: number = Number(
            (arriveTargetOffset / 10).toFixed(1)
          );
          if (calcOffset > 10) {
            clickPositionY -= Number((arriveTargetOffset / 45).toFixed(1));
          } else if (calcOffset > 5) {
            clickPositionY -= Number((arriveTargetOffset / 50).toFixed(1));
          } else if (calcOffset > 1) {
            clickPositionY -= Number((arriveTargetOffset / 55).toFixed(2));
          } else if (calcOffset > 0) {
            clickPositionY -= 0.1;
          } else {
            clickPositionY = targetPositionY;
          }
        }
        window.scrollTo({ top: clickPositionY, left: 0 });
        scrollToRef(ref, clickPositionY, targetPositionY, scrollEventIndex);
      }, 1);
    }
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: "3vmin",
      paddingRight: "3vmin"
    },
    menuContainerAbout: {
      marginTop: 105,
      [theme.breakpoints.down("sm")]: {
        marginTop: 65
      },
      background: "rgba(0,0,0,0.0)"
    },
    menuContainerCommon: {
      marginTop: 105,
      [theme.breakpoints.down("sm")]: {
        marginTop: 65
      }
    },
    footerOffset: {
      height: 100,
      [theme.breakpoints.up("xl")]: {
        height: 260
      }
    },
    footerDiv: {
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  })
);

export default function Home() {
  const aboutScrollEventIndex: number = 0;
  const skillsScrollEventIndex: number = 1;
  const historyScrollEventIndex: number = 2;
  const workScrollEventIndex: number = 3;
  const topScrollEventIndex: number = 4;
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const historyRef = useRef(null);
  const workRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const aboutExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(aboutScrollEventIndex);
    scrollToRef(aboutRef, window.pageYOffset, 0, aboutScrollEventIndex);
    setAnchorEl(null);
  };
  const skillsExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(skillsScrollEventIndex);
    scrollToRef(skillsRef, window.pageYOffset, 0, skillsScrollEventIndex);
    setAnchorEl(null);
  };
  const historyExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(historyScrollEventIndex);
    scrollToRef(historyRef, window.pageYOffset, 0, historyScrollEventIndex);
    setAnchorEl(null);
  };
  const workExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(workScrollEventIndex);
    scrollToRef(workRef, window.pageYOffset, 0, workScrollEventIndex);
    setAnchorEl(null);
  };
  const topExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(topScrollEventIndex);
    scrollToRef("top", window.pageYOffset, 0, topScrollEventIndex);
  };
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="xl" className={classes.root}>
      <Top
        executeScroll={[
          aboutExecuteScroll,
          skillsExecuteScroll,
          historyExecuteScroll,
          workExecuteScroll,
          topExecuteScroll
        ]}
        anchorEl={[anchorEl, setAnchorEl]}
      />
      <div id="aboutDiv" ref={aboutRef} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container
          maxWidth="md"
          disableGutters
          className={classes.menuContainerAbout}
        >
          <About />
        </Container>
      </Fade>
      <div id="skillsDiv" ref={skillsRef} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container
          maxWidth="md"
          disableGutters
          className={classes.menuContainerCommon}
        >
          <Skills />
        </Container>
      </Fade>
      <div id="historyDiv" ref={historyRef} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container
          maxWidth="md"
          disableGutters
          className={classes.menuContainerCommon}
        >
          <History />
        </Container>
      </Fade>
      <div id="workDiv" ref={workRef} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container
          maxWidth="md"
          disableGutters
          className={classes.menuContainerCommon}
        >
          <Work />
        </Container>
      </Fade>
      <div className={classes.footerOffset} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container maxWidth="xl" className={classes.footerDiv}>
          <Typography component="div" style={{ textAlign: "right" }}>
            <Box color="#f4f5f7" fontSize={11} fontWeight="fontWeightLight">
              ©︎ 2020 Jamin Yip.
            </Box>
          </Typography>
        </Container>
      </Fade>
      <br />
    </Container>
  );
}
