import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
//import Avatar from "@material-ui/core/Avatar";
//import AvatarImage from "../images/avatar.jpg";
import TopImage1 from "../images/top1.jpg";
import TopImage2 from "../images/top2.jpg";
import TopImage3 from "../images/top3.jpg";
import TopImage4 from "../images/top4.jpg";
import TopImage5 from "../images/top5.jpg";
import TopImage6 from "../images/top6.jpg";
import TopImage7 from "../images/top7.jpg";
import TopImage8 from "../images/top8.jpg";
import TopImage9 from "../images/top9.jpg";
import TopImage10 from "../images/top10.jpg";
import TopImage11 from "../images/top11.jpg";
import TopImage12 from "../images/top12.jpg";
import TopImage13 from "../images/top13.jpg";
import TopImage14 from "../images/top14.jpg";
import TopImage15 from "../images/top15.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
//import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: "0",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "30vh"
      },
      [theme.breakpoints.up("md")]: {
        height: "92vh"
      },
      background: "black"
    },
    appBar: {
      borderBottom: `0px solid ${theme.palette.divider}`,
      background: "rgba(255,255,255,0.0)"
    },
    toolbarTitle: {
      flexGrow: 1,
      display: "flex"
    },
    link: {
      margin: theme.spacing(1, 1.0)
    },
    //avatar: {
    //margin: theme.spacing(0.3),
    //marginRight: theme.spacing(1.0),
    //width: theme.spacing(3),
    //height: theme.spacing(3)
    //}
    image: {
      top: "0",
      width: "100%",
      position: "absolute",
      objectFit: "cover",
      [theme.breakpoints.down("sm")]: {
        height: "30vh"
      },
      [theme.breakpoints.up("md")]: {
        height: "92vh"
      }
    }
  })
);

const linkAttr = {
  target: "_blank",
  rel: "noopener noreferrer"
};

const images = [
  TopImage1,
  TopImage2,
  TopImage3,
  TopImage4,
  TopImage5,
  TopImage6,
  TopImage7,
  TopImage8,
  TopImage9,
  TopImage10,
  TopImage11,
  TopImage12,
  TopImage13,
  TopImage14,
  TopImage15
];
const lastIndex = images.length - 1;
let imageIndex = 0;
let isFade = true;
let count = 0;

export default function Top() {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 130 });
  let [fade, setFade] = React.useState(true);

  React.useEffect(
    function() {
      const intervalId = setInterval(function() {
        count++;
        if (count === 1 && !isFade) {
          imageIndex++;
          imageIndex = imageIndex % (lastIndex + 1);
          setFade(prev => !prev);
          isFade = true;
          count = 0;
        }
        if (count > 4) {
          setFade(prev => !prev);
          isFade = false;
          count = 0;
        }
      }, 1500);

      return function() {
        clearInterval(intervalId);
      };
    },
    [fade]
  );

  return (
    <div className={classes.root}>
      <Slide
        appear={false}
        direction="down"
        in={!trigger}
        timeout={{ enter: 500, exit: 500 }}
      >
        <AppBar position="sticky" elevation={0} className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.toolbarTitle}>
              {/* <Avatar */}
              {/* alt="アバター" */}
              {/* src={AvatarImage} */}
              {/* className={classes.avatar} */}
              {/* /> */}
              <Fade in timeout={{ enter: 4000, exit: 1500 }}>
                <Box
                  fontSize="h6.fontSize"
                  fontWeight="fontWeightLight"
                  fontFamily="Shadows Into Light"
                  letterSpacing={1}
                  m={0.5}
                  mb={1}
                >
                  Jamin Yip
                </Box>
              </Fade>
            </Typography>
            <Fade in timeout={{ enter: 4000, exit: 1500 }}>
              <a
                href="https://github.com/JaminYip"
                {...linkAttr}
                className={classes.link}
              >
                <GitHubIcon style={{ color: "white" }} />
              </a>
              {/* <a */}
              {/* href="https://www.facebook.com/jamin.yip" */}
              {/* {...linkAttr} */}
              {/* className={classes.link} */}
              {/* > */}
              {/* <FacebookIcon style={{ color: "#3B5998" }} /> */}
              {/* </a> */}
            </Fade>
          </Toolbar>
        </AppBar>
      </Slide>
      <Container disableGutters maxWidth="xl">
        <Fade in={fade} timeout={{ enter: 4000, exit: 1500 }}>
          <img
            className={classes.image}
            src={images[imageIndex]}
            alt="トップ画像"
          />
        </Fade>
      </Container>
    </div>
  );
}
