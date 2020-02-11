import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import HistoryCommonCardHeader from "./common/HistoryCommonCardHeader";
import HistoryCommonCardContent from "./common/HistoryCommonCardContent";
import HistoryCommonStyles from "./common/HistoryCommonStyles";
import EnergyCloudDetail from "./EnergyCloudDetail";

export default function EnergyCloud() {
  const classes = HistoryCommonStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <HistoryCommonCardHeader
        title={"エネルギー会社基幹業務クラウドシステム開発"}
        subheader={"January 2017 -"}
        backgroundColorHex={"#726056"}
        styles={classes}
      />
      <HistoryCommonCardContent
        overview={
          "エネルギー会社現行稼働している業務システムのバックエンド開発"
        }
        process={["要件定義", "設計", "実装", "テスト", "保守"]}
        skills={["Java", "Spring", "VBScript", "Oracle11g"]}
        styles={classes}
      />
      <CardActions>
        <EnergyCloudDetail />
      </CardActions>
    </Card>
  );
}
