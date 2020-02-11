import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import HistoryCommonCardHeader from "./common/HistoryCommonCardHeader";
import HistoryCommonCardContent from "./common/HistoryCommonCardContent";
import HistoryCommonStyles from "./common/HistoryCommonStyles";
import FinanceCRMDetail from "./FinanceCRMDetail";

export default function FinanceCRM() {
  const classes = HistoryCommonStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <HistoryCommonCardHeader
        title={"金融向けCRMシステム開発"}
        subheader={"July 2014 - March 2016"}
        backgroundColorHex={"#912d2a"}
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
        <FinanceCRMDetail />
      </CardActions>
    </Card>
  );
}