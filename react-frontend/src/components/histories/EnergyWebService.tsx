import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import HistoryCommonCardHeader from "./common/HistoryCommonCardHeader";
import HistoryCommonCardContent from "./common/HistoryCommonCardContent";
import HistoryCommonDetail from "./common/HistoryCommonDetail";
import HistoryCommonStyles from "./common/HistoryCommonStyles";
import Constant from "./common/Constant";

export default function EnergyWebService() {
  const classes = HistoryCommonStyles();
  const constant = Constant();

  return (
    <Card variant="outlined" className={classes.card}>
      <HistoryCommonCardHeader
        title={"エネルギー会社ウェブサービス開発"}
        subheader={"February 2019 -"}
        backgroundHex={"linear-gradient(45deg, #004a8d 30%, #585d6a 90%)"}
        styles={classes}
      />
      <HistoryCommonCardContent
        overview={
          "エネルギー会社契約者向けアプリやウェブサービスのバックエンド開発"
        }
        process={["要件定義", "設計", "実装", "テスト"]}
        skills={["Python", "Flask", "Nginx", "MySQL", "NoSQL"]}
        styles={classes}
      />
      <CardActions>
        <HistoryCommonDetail history={constant.HistoryKey.energyWebService} />
      </CardActions>
    </Card>
  );
}
