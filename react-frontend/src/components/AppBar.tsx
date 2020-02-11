import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AvatarImage from "../images/avatar.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
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
      borderBottom: `1px solid ${theme.palette.divider}`,
      marginBottom: theme.spacing(1.0),
      bottom: "70"
    },
    toolbar: {
      flexWrap: "wrap",
      marginBottom: theme.spacing(-0.5)
    },
    toolbarTitle: {
      flexGrow: 1,
      display: "flex",
      color: "#000000"
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
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <React.Fragment>
      <CssBaseline />
      <Slide
        appear={false}
        direction="down"
        in={!trigger}
        timeout={{ enter: 400, exit: 400 }}
      >
        <AppBar
          position="sticky"
          color="default"
          elevation={5}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography variant="overline" className={classes.toolbarTitle}>
              <Avatar
                alt="アバター"
                src={AvatarImage}
                className={classes.avatar}
              />
              JaminYip's Portfolio
            </Typography>
            <nav>
              <a
                href="https://github.com/JaminYip"
                {...linkAttr}
                className={classes.link}
              >
                <GitHubIcon style={{ color: "#000000" }} />
              </a>
              <a
                href="https://www.facebook.com/jamin.yip"
                {...linkAttr}
                className={classes.link}
              >
                <FacebookIcon style={{ color: "#3B5998" }} />
              </a>
            </nav>
          </Toolbar>
        </AppBar>
      </Slide>
    </React.Fragment>
  );
}
