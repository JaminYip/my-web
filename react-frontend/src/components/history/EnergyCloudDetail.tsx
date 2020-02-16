import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function EnergyCloudDetail() {
  return (
    <React.Fragment>
      <DialogTitle>
        <Typography color="textSecondary">
          <Box fontSize="subtitle2.fontSize">
            エネルギー会社基幹業務クラウドシステム開発
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
              エネルギー会社現行稼働している基幹業務システムバックエンドの開発を担当。Java-SpringによるAPI開発、ビジネスロジックの実装、AndroidアプリのIF改修、帳票フォーマット修正、WSHによる処理自動化ツール(VBScript)の作成、システム障害対応。
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">【ロール/担当フェーズ】</Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              バックエンド開発
              <br />
              用件定義〜保守
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">
              【言語(FW)/DB/インフラ/ツール,その他】
            </Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              Java6(Spring3.1.1)、VBScript
              <br />
              Oracle11g
              <br />
              KCPS
              <br />
              Eclipse、Postman、A5:SQL
              Mk-2、SVFX-Designer、SVN、JIRA、Slack、Backlog、Symphony
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">【習得技術】</Box>
          </Typography>
          <Typography>
            <Box color="text.primary" fontSize="caption.fontSize">
              Java(Spring)によるバックエンド開発は初体験であったが、様々な情報を参考にしてこれまでプログラミングの経験を生かし素早くキャッチアップ。
              <br />
              要件定義を始め顧客とのコミニュケーションをとる機会が増えたため上流工程の経験を得ることができ、コミュニケーション力を高めることができた。
            </Box>
          </Typography>
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
  );
}
