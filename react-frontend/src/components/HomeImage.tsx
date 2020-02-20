import React from "react";
import MyHomeImage from "../images/home.jpg";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: "0",
      height: "30%",
      width: "100%",
      position: "absolute",
      objectFit: "cover",
      opacity: "1.0",
      [theme.breakpoints.down("sm")]: {
        height: "30.5vh"
      },
      [theme.breakpoints.only("md")]: {
        height: "92.5vh"
      },
      [theme.breakpoints.only("lg")]: {
        height: "92vh"
      },
      [theme.breakpoints.up("xl")]: {
        height: "93.5vh"
      }
    }
  })
);

export default function HomeImage() {
  const classes = useStyles();

  return <img className={classes.root} src={MyHomeImage} alt="ホーム画像" />;
}
