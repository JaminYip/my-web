import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import HistoryCommonCardHeader from "./common/HistoryCommonCardHeader";
import HistoryCommonCardContent from "./common/HistoryCommonCardContent";
import HistoryCommonDetail from "./common/HistoryCommonDetail";
import HistoryCommonStyles from "./common/HistoryCommonStyles";
import HistoryConstant from "./common/HistoryConstant";

export default function FinanceCRM() {
  const classes = HistoryCommonStyles();
  const historyConstant = HistoryConstant();

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
        skills={["C#.NET", "JavaScript(jQuery)", "HTML5", "MySQL", "Oracle"]}
        styles={classes}
      />
      <CardActions>
        <HistoryCommonDetail history={historyConstant.financeCRM} />
      </CardActions>
    </Card>
  );
}
