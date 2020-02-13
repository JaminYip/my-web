import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function FinanceCRMDetail() {
  return (
    <React.Fragment>
      <DialogTitle>
        <Typography color="textSecondary">
          <Box fontSize="subtitle2.fontSize">
            エネルギー会社ウェブサービス開発
          </Box>
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          <Typography>
            <Box fontSize="overline.fontSize">【業務内容】</Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              ①証券会社向けSalesforce営業支援iPadアプリのテスターを担当。
              <br />
              →バグの原因調査及び修正。
              <br />
              ②証券会社向け顧客情報管理システムのフロントエンド及びバックエンドの開発を担当。
              <br />
              →WEB画面作成(JavaScript、HTML5、CSS)、非同期処理実装(Ajax)、ビジネスロジックの実装(C#.NET)、排他制御処理実装。
              <br />
              ③TMAP(金融向けCRMシステム)のフロンドエンド及びバックエンドの開発を担当
              <br />
              →WEB画面作成(JavaScript、HTML5、CSS)、ビジネスロジックの実装(C#.NET)、外部API連携機能実装。
              <br />
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">【ロール/担当フェーズ】</Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              ①テスター
              <br />
              →テスト
              <br />
              ②③フロンドエンド・バックエンド開発
              <br />
              →設計〜テスト
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">
              【言語(FW)/DB/インフラ/ツール,その他】
            </Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              C#(.NET4.5)
              <br />
              MySQL、Oracle11g
              <br />
              Visual Studio、jQuery、MySQL Workbench、SI Object
              Browser、Jmeter、SVN
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">【習得技術】</Box>
          </Typography>
          <Typography>
            <Box color="text.primary" fontSize="caption.fontSize">
              C#.NET、JavaScript、HTML5によるWebアプリケーション開発は初体験であったが、大量のコーデイングをこなすことによりプログラミングスキルが飛躍的に伸びることができ、クラスの概念を意識しつつオブジェクト指向プログラミングスキルの向上を図ることができた。また、機能設計～テストまでの工程を携わることができ、開発の流れを体得することができた。
            </Box>
          </Typography>
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
  );
}
