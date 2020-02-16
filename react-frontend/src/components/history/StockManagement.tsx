import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import HistoryCommonCardHeader from "./common/HistoryCommonCardHeader";
import HistoryCommonCardContent from "./common/HistoryCommonCardContent";
import HistoryCommonDetail from "./common/HistoryCommonDetail";
import HistoryCommonStyles from "./common/HistoryCommonStyles";
import HistoryConstant from "./common/HistoryConstant";

export default function POS() {
  const classes = HistoryCommonStyles();
  const historyConstant = HistoryConstant();

  return (
    <Card variant="outlined" className={classes.card}>
      <HistoryCommonCardHeader
        title={"iPhone用在庫管理アプリ開発(大学時代アルバイト)"}
        subheader={"August 2012 - September 2012"}
        backgroundHex={"linear-gradient(45deg, #023359 30%, #353941 90%)"}
        styles={classes}
      />
      <HistoryCommonCardContent
        overview={
          "現行稼働している組込システム(ハンディ)をiPhoneアプリにリプレイス"
        }
        process={["実装"]}
        skills={["Objective-C", "SQLite"]}
        styles={classes}
      />
      <CardActions>
        <HistoryCommonDetail history={historyConstant.stockManagement} />
      </CardActions>
    </Card>
  );
}
