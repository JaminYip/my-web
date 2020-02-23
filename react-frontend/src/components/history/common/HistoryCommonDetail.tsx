import React from "react";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HistoryCommonCardDetail from "./HistoryCommonCardDetail";
import HistoryCommonStyles from "./HistoryCommonStyles";
import HistoryConstant from "./HistoryConstant";

interface Props {
  history: string;
}

export default function HistoryCommonDetail(prop: Props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const classes = HistoryCommonStyles();
  const historyId = HistoryConstant();

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        onClick={handleClickOpen("paper")}
        disableFocusRipple
        className={classes.buttonDetail}
        endIcon={<ExpandMoreIcon style={{ fontSize: 13 }} />}
      >
        See More
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        transitionDuration={{ enter: 600, exit: 350 }}
      >
        {(function() {
          switch (prop.history) {
            case historyId.energyWebService:
              return (
                <HistoryCommonCardDetail
                  detailTitle={"エネルギー会社ウェブサービス開発"}
                  detailWork={
                    "エネルギー会社契約者向けアプリやウェブサービスのバックエンドの開発兼チームリーダーを担当。" +
                    "Python-FlaskによるAPI開発、OSSライブラリ導入(ReportLab)、ミドルウェア導入(Apache Kafka)、" +
                    "ログローテーション機能実装、本番環境リリース作業、パフォーマンスチューニング(Nginx、uWSGI、MongoDB)。"
                  }
                  detailRole={
                    "バックエンド開発兼チームリーダー¥n用件定義〜テスト"
                  }
                  detailSkills={
                    "Python3.6(Flask1.0.2)¥nMySQL5.7、MongoDB3.4、Redis3.2¥nAWS(VPC/EC2/ELB/RDS/S3)¥nLinux(CentOS7)、" +
                    "Nginx、uWSGI、API Gateway(Konga)、Apache Kafka、ReportLab、Pycharm、MongoDB Compass、Medis、" +
                    "A5:SQL Mk-2、Postman、WinSCP、Tera Term、Sourcetree、Github、Backlog、Symphony"
                  }
                  detailLearned={
                    "Python(Flask)によるバックエンド開発は初体験であったが、" +
                    "これまでバックエンド開発の経験を生かして短期間でキャッチアップし、" +
                    "OSSライブラリやミドルウェアの技術調査・導入することにより知識も実践レベルで習得できた。" +
                    "¥nチームリーダーを勤めることにより、顧客や他チームとの調整、" +
                    "作業メンバーの進捗管理を経験することによってマネジメント能力を高めることができた。"
                  }
                />
              );
            case historyId.energyCloud:
              return (
                <HistoryCommonCardDetail
                  detailTitle={"エネルギー会社基幹業務クラウドシステム開発"}
                  detailWork={
                    "エネルギー会社現行稼働している基幹業務システムバックエンドの開発を担当。Java-SpringによるAPI開発、" +
                    "ビジネスロジックの実装、AndroidアプリのIF改修、帳票フォーマット修正、WSHによる処理自動化ツール(VBScript)の作成、システム障害対応。"
                  }
                  detailRole={"バックエンド開発¥n用件定義〜保守"}
                  detailSkills={
                    "Java6(Spring3.1.1)、VBScript¥nOracle11g¥nKCPS¥nEclipse、Postman、A5:SQL Mk-2、SVFX-Designer、SVN、JIRA、Slack、Backlog、Symphony"
                  }
                  detailLearned={
                    "Java(Spring)によるバックエンド開発は初体験であったが、様々な情報を参考にしてこれまでプログラミングの経験を生かし素早くキャッチアップ。" +
                    "¥n要件定義を始め顧客とのコミニュケーションをとる機会が増えたため上流工程の経験を得ることができ、コミュニケーション力を高めることができた。"
                  }
                />
              );
            case historyId.membershipManagement:
              return (
                <HistoryCommonCardDetail
                  detailTitle={"会員情報照会システム開発"}
                  detailWork={
                    "携帯キャリア向け会員情報照会システムのバックエンドの開発を担当。Java-独自フレームワークによるAPI開発、" +
                    "プッシュ通知(配信情報、配信制御)機能改修、テストコード作成、本番環境リリース作業。"
                  }
                  detailRole={"バックエンド開発¥n設計〜テスト"}
                  detailSkills={
                    "Java(独自フレームワーク)¥nPostgreSQL¥nEclipse、Junit、Jmeter、pgAdmin2、Tera Term、SVN、Redmine"
                  }
                  detailLearned={
                    "Javaプログラミングは初体験であったが、これまでオブジェクト指向プログラミングの経験を生かして短期間でキャッチアップ。" +
                    "¥nまた、Junitによるテストコード作成の知識も実践レベルで習得できた。"
                  }
                />
              );
            case historyId.financeCRM:
              return (
                <HistoryCommonCardDetail
                  detailTitle={"金融向けCRMシステム開発"}
                  detailWork={
                    "①証券会社向けSalesforce営業支援iPadアプリのテスターを担当。¥n→バグの原因調査及び修正。" +
                    "¥n②証券会社向け顧客情報管理システムのフロントエンド及びバックエンドの開発を担当。" +
                    "¥n→WEB画面作成(JavaScript(jQuery)、HTML5、CSS)、非同期処理実装(Ajax)、ビジネスロジックの実装(C#.NET)、排他制御処理実装。" +
                    "¥n③TMAP(金融向けCRMシステム)のフロンドエンド及びバックエンドの開発を担当" +
                    "¥n→WEB画面作成(JavaScript(jQuery)、HTML5、CSS)、ビジネスロジックの実装(C#.NET)、外部API連携機能実装。"
                  }
                  detailRole={
                    "①テスター¥n→テスト¥n②③フロンドエンド・バックエンド開発¥n→設計〜テスト"
                  }
                  detailSkills={
                    "C#(.NET4.5)、JavaScript(jQuery)¥nMySQL、Oracle11g¥nVisual Studio、MySQL Workbench、SI Object Browser、Jmeter、SVN"
                  }
                  detailLearned={
                    "C#.NET、JavaScript(jQuery)、HTML5によるWebアプリケーション開発は初体験であったが、" +
                    "大量のコーデイングをこなすことによりプログラミングスキルが飛躍的に伸びることができ、" +
                    "クラスの概念を意識しつつオブジェクト指向プログラミングスキルの向上を図ることができた。" +
                    "また、機能設計～テストまでの工程を携わることができ、開発の流れを体得することができた。"
                  }
                />
              );
            case historyId.pos:
              return (
                <HistoryCommonCardDetail
                  detailTitle={"iPad用POSアプリ開発(大学時代アルバイト)"}
                  detailWork={
                    "iPad用POSアプリのインターフェースの開発を担当。Objective-Cによる画面表示、画面遷移、項目の入出力、カスタムキーボード、グリッド描画機能を実装。"
                  }
                  detailRole={"インターフェース開発¥n実装"}
                  detailSkills={"Objective-C¥nSQLite¥nXcode"}
                  detailLearned={
                    "Objective-Cによるプログラミングスキルの向上を図ることができた。可変グリッドレイアウトの描画、" +
                    "カスタムキーボード機能の実装はネット情報のリサーチにより実現できたため、自走力を鍛えることができた。"
                  }
                />
              );
            case historyId.stockManagement:
              return (
                <HistoryCommonCardDetail
                  detailTitle={"iPhone用在庫管理アプリ開発(大学時代アルバイト)"}
                  detailWork={
                    "iPhone用在庫管理アプリのインターフェースの開発を担当。現行稼働している組込システム(ハンディ)をiPhoneアプリにリプレイス。" +
                    "Objective-Cによる画面表示、画面遷移、項目の入出力を実装。"
                  }
                  detailRole={"インターフェース開発¥n実装"}
                  detailSkills={"Objective-C¥nSQLite¥nXcode"}
                  detailLearned={
                    "プログラミングは初体験であったが、参考書やネット情報を参考にしてObjective-Cによるプログラミングスキルを身に付けることができた。" +
                    "また、DBまわりは自社ライブラリを流用し(C言語)開発効率を上げられる手法が勉強になった。"
                  }
                />
              );
            default:
              return <React.Fragment />;
          }
        })()}
        <DialogActions>
          <Button onClick={handleClose} className={classes.buttonDialogClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
