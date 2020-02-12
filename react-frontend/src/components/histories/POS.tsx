import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import HistoryCommonCardHeader from "./common/HistoryCommonCardHeader";
import HistoryCommonCardContent from "./common/HistoryCommonCardContent";
import HistoryCommonDetail from "./common/HistoryCommonDetail";
import HistoryCommonStyles from "./common/HistoryCommonStyles";
import Constant from "./common/Constant";

export default function POS() {
  const classes = HistoryCommonStyles();
  const constant = Constant();

  return (
    <Card variant="outlined" className={classes.card}>
      <HistoryCommonCardHeader
        title={"iPad用POSアプリ開発(大学時代アルバイト)"}
        subheader={"February 2013 - March 2013"}
        backgroundHex={"linear-gradient(45deg, #460061 30%, #442e48 90%)"}
        styles={classes}
      />
      <HistoryCommonCardContent
        overview={"iPad版POSアプリの新規開発"}
        process={["実装"]}
        skills={["Objective-C", "SQLite"]}
        styles={classes}
      />
      <CardActions>
        <HistoryCommonDetail history={constant.HistoryKey.pos} />
      </CardActions>
    </Card>
  );
}
