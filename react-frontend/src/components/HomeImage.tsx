import React from "react";
import MyHomeImage from "../images/home.jpg";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: "0",
      height: "100%",
      width: "100%",
      position: "relative",
      objectFit: "cover",
      opacity: "1.0",
      [theme.breakpoints.up("md")]: {
        height: "81vh"
      },
      [theme.breakpoints.up("xl")]: {
        height: "86vh"
      }
    }
  })
);

export default function HomeImage() {
  const classes = useStyles();

  return <img className={classes.root} src={MyHomeImage} alt="ホーム画像" />;
}
