import React, { SetStateAction } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tooltip from "@material-ui/core/Tooltip";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import TopImage1 from "../../images/top1.jpg";
import TopImage2 from "../../images/top2.jpg";
import TopImage3 from "../../images/top3.jpg";
import TopImage4 from "../../images/top4.jpg";
import TopImage5 from "../../images/top5.jpg";
import TopImage6 from "../../images/top6.jpg";
import TopImage7 from "../../images/top7.jpg";
import TopImage8 from "../../images/top8.jpg";
import TopImage9 from "../../images/top9.jpg";
import TopImage10 from "../../images/top10.jpg";
import TopImage11 from "../../images/top11.jpg";
import TopImage12 from "../../images/top12.jpg";
import TopImage13 from "../../images/top13.jpg";
import TopImage14 from "../../images/top14.jpg";
import TopImage15 from "../../images/top15.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
//import FacebookIcon from "@material-ui/icons/Facebook";
//import Avatar from "@material-ui/core/Avatar";
//import AvatarImage from "../images/avatar.jpg";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      top: 0,
      borderBottom: `0px solid ${theme.palette.divider}`,
      background: "rgba(255,255,255,0.0)"
    },
    toolbarWeb: {
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    toolbarMobile: {
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    author: {
      flexGrow: 1,
      display: "flex"
    },
    imageDiv: {
      top: 0,
      marginTop: 20,
      position: "relative",
      height: "100vmin",
      [theme.breakpoints.down("sm")]: {
        marginTop: 0,
        left: "0",
        width: "100%",
        height: "40vmax"
      }
    },
    image: {
      top: 0,
      left: "9%",
      width: "90%",
      height: "100vmin",
      [theme.breakpoints.down("sm")]: {
        left: "0",
        width: "100%",
        height: "40vmax"
      },
      position: "absolute",
      objectFit: "cover"
    },
    sectionLinkDiv: {
      margin: theme.spacing(1.5)
    },
    sectionLink: {
      fontSize: 12,
      fontWeight: 300,
      letterSpacing: theme.spacing(0.2),
      color: "#f4f5f7",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))",
      userSelect: "none",
      display: "inline-block",
      cursor: "pointer",
      textDecoration: "none",
      transition: "0.5s",
      "&:hover": {
        color: "#f50057",
        transform: "scale(1.1)"
      }
    },
    gitDiv: {
      marginRight: theme.spacing(5.0),
      marginLeft: theme.spacing(3.0),
      transform: "scale(0.8,0.8)",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    git: {
      color: "#f4f5f7",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))"
    },
    menuIcon: {
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))"
    },
    menuPopoverPaper: {
      background: "#9e9e9e",
      width: "100%",
      height: "100%",
      maxHeight: "inherit",
      maxWidth: "inherit"
    },
    menuCloseDiv: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      marginTop: "1.5vmax",
      marginRight: "4vmax"
    },
    menuClose: {
      color: "#f4f5f7",
      userSelect: "none",
      textDecoration: "none",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))"
    },
    menuSectionLinkDiv: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "10vmin"
    },
    menuSectionLink: {
      color: "#f4f5f7",
      userSelect: "none",
      textDecoration: "none",
      fontSize: 22,
      fontWeight: 300,
      letterSpacing: theme.spacing(0.3)
    },
    menuFooterDiv: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    menuFooterGit: {
      color: "#f4f5f7",
      userSelect: "none",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))",
      transform: "scale(0.8,0.8)"
    },
    menuFooterText: {
      color: "#f4f5f7",
      userSelect: "none",
      textDecoration: "none",
      fontSize: 12,
      fontWeight: 300
    },
    footerBar: {
      top: "auto",
      bottom: 0,
      background: "rgba(0,0,0,0.0)",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    toTopDiv: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      marginTop: -35,
      marginRight: 7
    },
    toTop: {
      color: "#f4f5f7",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))"
    }
    //avatar: {
    //margin: theme.spacing(0.3),
    //marginRight: theme.spacing(1.0),
    //width: theme.spacing(3),
    //height: theme.spacing(3)
    //}
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

const lastIndex: number = images.length - 1;
let imageIndex: number = 0;
let isFade: boolean = true;
let count: number = 0;

interface Props {
  executeScroll: ((
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void)[];
  anchorEl: [
    Element | ((element: Element) => Element) | null | undefined,
    React.Dispatch<SetStateAction<HTMLElement | null>>
  ];
}

export default function Top(prop: Props) {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 700 });
  const [fade, setFade] = React.useState(true);

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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    prop.anchorEl[1](event.currentTarget);
  };
  const handleClose = () => {
    prop.anchorEl[1](null);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0} className={classes.navBar}>
        <Toolbar className={classes.toolbarWeb}>
          <Slide
            appear={false}
            direction="down"
            in={!trigger}
            timeout={{ enter: 500, exit: 500 }}
          >
            <Typography component="span" className={classes.author}>
              <Fade in timeout={{ enter: 4000, exit: 1500 }}>
                <Box
                  fontSize="h5.fontSize"
                  fontWeight="fontWeightLight"
                  fontFamily="Shadows Into Light"
                  color="#f4f5f7"
                  letterSpacing={1}
                  m={0.5}
                  mt={4}
                >
                  Jamin Yip
                </Box>
              </Fade>
            </Typography>
          </Slide>
          <Fade in timeout={{ enter: 4000, exit: 1500 }}>
            <Typography component="div" className={classes.sectionLinkDiv}>
              <Box mt={4}>
                <span
                  className={classes.sectionLink}
                  onClick={prop.executeScroll[0]}
                >
                  ABOUT
                </span>
              </Box>
            </Typography>
          </Fade>
          <Fade in timeout={{ enter: 4000, exit: 1500 }}>
            <Typography component="div" className={classes.sectionLinkDiv}>
              <Box mt={4}>
                <span
                  className={classes.sectionLink}
                  onClick={prop.executeScroll[1]}
                >
                  SKILLS
                </span>
              </Box>
            </Typography>
          </Fade>
          <Fade in timeout={{ enter: 4000, exit: 1500 }}>
            <Typography component="div" className={classes.sectionLinkDiv}>
              <Box mt={4}>
                <span
                  className={classes.sectionLink}
                  onClick={prop.executeScroll[2]}
                >
                  HISTORY
                </span>
              </Box>
            </Typography>
          </Fade>
          <Fade in timeout={{ enter: 4000, exit: 1500 }}>
            <Typography component="div" className={classes.sectionLinkDiv}>
              <Box mt={4}>
                <span
                  className={classes.sectionLink}
                  onClick={prop.executeScroll[3]}
                >
                  WORK
                </span>
              </Box>
            </Typography>
          </Fade>
          <Fade in timeout={{ enter: 4000, exit: 1500 }}>
            <Typography component="div" className={classes.gitDiv}>
              <Box mt={5}>
                <a
                  href="https://github.com/JaminYip"
                  {...linkAttr}
                  className={classes.git}
                >
                  <Tooltip title="Click to open the GitHub" arrow>
                    <GitHubIcon />
                  </Tooltip>
                </a>
              </Box>
            </Typography>
            {/* <a */}
            {/* href="https://www.facebook.com/jamin.yip" */}
            {/* {...linkAttr} */}
            {/* className={classes.link} */}
            {/* > */}
            {/* <FacebookIcon style={{ color: "#3B5998" }} /> */}
            {/* </a> */}
          </Fade>
        </Toolbar>
        <Toolbar className={classes.toolbarMobile}>
          <Typography component="span" className={classes.author}>
            <Fade in timeout={{ enter: 4000, exit: 1500 }}>
              <Box
                fontSize="h5.fontSize"
                fontWeight="fontWeightLight"
                fontFamily="Shadows Into Light"
                color="#f4f5f7"
                letterSpacing={1}
                m={0.5}
              >
                Jamin Yip
              </Box>
            </Fade>
          </Typography>
          <Fade in timeout={{ enter: 4000, exit: 1500 }}>
            <IconButton
              edge="end"
              size="small"
              color="inherit"
              aria-haspopup
              aria-label="menu"
              onClick={handleClick}
              className={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>
          </Fade>
          <Menu
            anchorEl={prop.anchorEl[0]}
            open={Boolean(prop.anchorEl[0])}
            onClose={handleClose}
            TransitionComponent={Fade}
            PopoverClasses={{ paper: classes.menuPopoverPaper }}
            marginThreshold={0}
          >
            <div />
            <Typography component="div" className={classes.menuCloseDiv}>
              <span onClick={handleClose} className={classes.menuClose}>
                <CloseIcon />
              </span>
            </Typography>
            <br />
            <br />
            <Typography component="div" className={classes.menuSectionLinkDiv}>
              <span
                onClick={prop.executeScroll[0]}
                className={classes.menuSectionLink}
              >
                ABOUT
              </span>
            </Typography>
            <Typography component="div" className={classes.menuSectionLinkDiv}>
              <span
                onClick={prop.executeScroll[1]}
                className={classes.menuSectionLink}
              >
                SKILLS
              </span>
            </Typography>
            <Typography component="div" className={classes.menuSectionLinkDiv}>
              <span
                onClick={prop.executeScroll[2]}
                className={classes.menuSectionLink}
              >
                HISTORY
              </span>
            </Typography>
            <Typography component="div" className={classes.menuSectionLinkDiv}>
              <span
                onClick={prop.executeScroll[3]}
                className={classes.menuSectionLink}
              >
                WORK
              </span>
            </Typography>
            <br />
            <br />
            <Typography component="div" className={classes.menuFooterDiv}>
              <a
                href="https://github.com/JaminYip"
                {...linkAttr}
                className={classes.menuFooterGit}
              >
                <GitHubIcon />
              </a>
            </Typography>
            <Typography component="div" className={classes.menuFooterDiv}>
              <span className={classes.menuFooterText}>©︎ 2020 Jamin Yip.</span>
            </Typography>
          </Menu>
        </Toolbar>
      </AppBar>
      <div className={classes.imageDiv}>
        <Fade in={fade} timeout={{ enter: 4000, exit: 1500 }}>
          <img
            className={classes.image}
            src={images[imageIndex]}
            alt="トップ画像"
          />
        </Fade>
      </div>
      <AppBar position="fixed" className={classes.footerBar}>
        <Typography component="div" className={classes.toTopDiv}>
          <Fade in timeout={{ enter: 4000, exit: 1500 }}>
            <span onClick={prop.executeScroll[4]} className={classes.toTop}>
              <KeyboardArrowUpIcon />
            </span>
          </Fade>
        </Typography>
      </AppBar>
    </React.Fragment>
  );
}
