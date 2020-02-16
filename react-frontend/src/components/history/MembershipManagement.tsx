import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import HistoryCommonCardHeader from "./common/HistoryCommonCardHeader";
import HistoryCommonCardContent from "./common/HistoryCommonCardContent";
import HistoryCommonDetail from "./common/HistoryCommonDetail";
import HistoryCommonStyles from "./common/HistoryCommonStyles";
import HistoryConstant from "./common/HistoryConstant";

export default function MembershipManagement() {
  const classes = HistoryCommonStyles();
  const historyConstant = HistoryConstant();

  return (
    <Card variant="outlined" className={classes.card}>
      <HistoryCommonCardHeader
        title={"会員情報照会システム開発"}
        subheader={"April 2016 - December 2016"}
        backgroundHex={"linear-gradient(45deg, #21aca5 30%, #748882 90%)"}
        styles={classes}
      />
      <HistoryCommonCardContent
        overview={"携帯キャリア向け会員情報照会システムのバックエンド開発"}
        process={["設計", "実装", "テスト"]}
        skills={["Java", "custom-framework", "PostgreSQL"]}
        styles={classes}
      />
      <CardActions>
        <HistoryCommonDetail history={historyConstant.membershipManagement} />
      </CardActions>
    </Card>
  );
}
