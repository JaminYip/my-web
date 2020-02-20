import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
//import Avatar from "@material-ui/core/Avatar";
//import AvatarImage from "../images/avatar.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
//import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      }
    },
    appBar: {
      borderBottom: `0px solid ${theme.palette.divider}`,
      marginBottom: theme.spacing(0.0),
      background: "rgba(255,255,255,0.0)"
    },
    toolbar: {
      flexWrap: "wrap",
      marginBottom: theme.spacing(0)
    },
    toolbarTitle: {
      flexGrow: 1,
      display: "flex",
      color: "#ffffff"
    },
    link: {
      margin: theme.spacing(1, 1.0)
    },
    avatar: {
      margin: theme.spacing(0.3),
      marginRight: theme.spacing(1.0),
      width: theme.spacing(3),
      height: theme.spacing(3)
    }
  })
);

const linkAttr = {
  target: "_blank",
  rel: "noopener noreferrer"
};

export default function CustomizedAppBar() {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 130 });

  return (
    <React.Fragment>
      <CssBaseline />
      <Slide
        appear={false}
        direction="down"
        in={!trigger}
        timeout={{ enter: 400, exit: 400 }}
      >
        <AppBar position="sticky" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.toolbarTitle}>
              {/* <Avatar */}
              {/* alt="アバター" */}
              {/* src={AvatarImage} */}
              {/* className={classes.avatar} */}
              {/* /> */}
              <Box
                fontSize="subtitle2.fontSize"
                fontWeight="fontWeightLight"
                fontFamily="Ubuntu Mono"
                letterSpacing={1}
                m={0.5}
              >
                JaminYip's Portfolio
              </Box>
            </Typography>
            <nav>
              <a
                href="https://github.com/JaminYip"
                {...linkAttr}
                className={classes.link}
              >
                <GitHubIcon style={{ color: "#ffffff" }} />
              </a>
              {/* <a */}
              {/* href="https://www.facebook.com/jamin.yip" */}
              {/* {...linkAttr} */}
              {/* className={classes.link} */}
              {/* > */}
              {/* <FacebookIcon style={{ color: "#3B5998" }} /> */}
              {/* </a> */}
            </nav>
          </Toolbar>
        </AppBar>
      </Slide>
    </React.Fragment>
  );
}
