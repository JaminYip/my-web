import React from "react";
import MyHomeImage from "../images/home.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    top: "0",
    height: "100%",
    width: "100%",
    position: "relative",
    objectFit: "cover",
    opacity: "1.0"
  }
});

export default function HomeImage() {
  const classes = useStyles();

  return <img className={classes.root} src={MyHomeImage} alt="ホーム画像" />;
}
