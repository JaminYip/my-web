import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import HistoryCommonCardHeader from "./common/HistoryCommonCardHeader";
import HistoryCommonCardContent from "./common/HistoryCommonCardContent";
import HistoryCommonDetail from "./common/HistoryCommonDetail";
import HistoryCommonStyles from "./common/HistoryCommonStyles";
import Constant from "./common/Constant";

export default function FinanceCRM() {
  const classes = HistoryCommonStyles();
  const constant = Constant();

  return (
    <Card variant="outlined" className={classes.card}>
      <HistoryCommonCardHeader
        title={"金融向けCRMシステム開発"}
        subheader={"July 2014 - March 2016"}
        backgroundHex={"linear-gradient(45deg, #912d2a 30%, #885657 90%)"}
        styles={classes}
      />
      <HistoryCommonCardContent
        overview={
          "証券会社向け顧客情報管理システムのフロントエンド及びバックエンド開発"
        }
        process={["設計", "実装", "テスト"]}
        skills={["C#.NET", "JavaScript", "HTML5", "MySQL", "Oracle11g"]}
        styles={classes}
      />
      <CardActions>
        <HistoryCommonDetail history={constant.HistoryKey.financeCRM} />
      </CardActions>
    </Card>
  );
}
