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

window.addEventListener("load", () => {
  document.body.style.transition = "background-color 1.0s";
});

window.addEventListener("wheel", () => {
  setScrollState(null);
});

window.addEventListener("touchmove", () => {
  setScrollState(null);
});

const defaultBackgroundColor = "#000000";
const aboutSectionBackgroundColor = "#203a3d";
const skillsSectionBackgroundColor = "#3d203a";
const historySectionBackgroundColor = "#3a3d20";
window.addEventListener("scroll", () => {
  if (
    document.getElementById("aboutDiv") === null ||
    document.getElementById("skillsDiv") === null ||
    document.getElementById("historyDiv") === null ||
    document.getElementById("workDiv") === null
  ) {
    return;
  }

  if (
    document.getElementById("workDiv")!.getBoundingClientRect().top <= 1 &&
    document.body.style.backgroundColor !== defaultBackgroundColor
  ) {
    document.body.style.backgroundColor = defaultBackgroundColor;
  } else if (
    document.getElementById("historyDiv")!.getBoundingClientRect().top <= 1 &&
    document.body.style.backgroundColor !== historySectionBackgroundColor
  ) {
    document.body.style.backgroundColor = historySectionBackgroundColor;
  } else if (
    document.getElementById("skillsDiv")!.getBoundingClientRect().top <= 1 &&
    document.body.style.backgroundColor !== skillsSectionBackgroundColor
  ) {
    document.body.style.backgroundColor = skillsSectionBackgroundColor;
  } else if (
    document.getElementById("aboutDiv")!.getBoundingClientRect().top <= 1 &&
    document.body.style.backgroundColor !== aboutSectionBackgroundColor
  ) {
    document.body.style.backgroundColor = aboutSectionBackgroundColor;
  } else {
    if (document.body.style.backgroundColor !== defaultBackgroundColor) {
      document.body.style.backgroundColor = defaultBackgroundColor;
    }
  }
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
      [theme.breakpoints.only("md")]: {
        paddingLeft: "7vmin"
      },
      background: "rgba(0,0,0,0.0)"
    },
    menuContainerCommon: {
      marginTop: 105,
      [theme.breakpoints.down("sm")]: {
        marginTop: 65
      },
      [theme.breakpoints.only("md")]: {
        paddingLeft: "7vmin",
        paddingRight: "7vmin"
      }
    },
    footerOffset: {
      height: 105,
      [theme.breakpoints.up("xl")]: {
        height: 265
      }
    },
    footerDiv: {
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  })
);

export enum ScrollEventIndex {
  About,
  Skills,
  History,
  Work,
  Top
}

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const historyRef = useRef(null);
  const workRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const aboutExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.About);
    scrollToRef(aboutRef, window.pageYOffset, 0, ScrollEventIndex.About);
    setAnchorEl(null);
  };
  const skillsExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.Skills);
    scrollToRef(skillsRef, window.pageYOffset, 0, ScrollEventIndex.Skills);
    setAnchorEl(null);
  };
  const historyExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.History);
    scrollToRef(historyRef, window.pageYOffset, 0, ScrollEventIndex.History);
    setAnchorEl(null);
  };
  const workExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.Work);
    scrollToRef(workRef, window.pageYOffset, 0, ScrollEventIndex.Work);
    setAnchorEl(null);
  };
  const topExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.Top);
    scrollToRef("top", window.pageYOffset, 0, ScrollEventIndex.Top);
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
        scrollEventIndex={ScrollEventIndex}
        anchorEl={[anchorEl, setAnchorEl]}
      />
      <div style={{ height: 5 }} />
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
      <div style={{ height: 5 }} />
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
      <div style={{ height: 5 }} />
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
      <div style={{ height: 5 }} />
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
      <br />
    </Container>
  );
}
