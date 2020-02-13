import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import HistoryCommonCardHeader from "./common/HistoryCommonCardHeader";
import HistoryCommonCardContent from "./common/HistoryCommonCardContent";
import HistoryCommonDetail from "./common/HistoryCommonDetail";
import HistoryCommonStyles from "./common/HistoryCommonStyles";
import Constant from "./common/Constant";

export default function EnergyCloud() {
  const classes = HistoryCommonStyles();
  const constant = Constant();

  return (
    <Card variant="outlined" className={classes.card}>
      <HistoryCommonCardHeader
        title={"エネルギー会社基幹業務クラウドシステム開発"}
        subheader={"January 2017 -"}
        backgroundHex={"linear-gradient(45deg, #726056 30%, #6a6360 90%)"}
        styles={classes}
      />
      <HistoryCommonCardContent
        overview={
          "エネルギー会社現行稼働している業務システムのバックエンド開発"
        }
        process={["要件定義", "設計", "実装", "テスト", "保守"]}
        skills={["Java", "Spring", "VBScript", "Oracle"]}
        styles={classes}
      />
      <CardActions>
        <HistoryCommonDetail history={constant.HistoryKey.energyCloud} />
      </CardActions>
    </Card>
  );
}
