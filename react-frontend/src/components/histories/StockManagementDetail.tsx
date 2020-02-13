import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function StockManagementDetail() {
  return (
    <React.Fragment>
      <DialogTitle>
        <Typography color="textSecondary">
          <Box fontSize="subtitle2.fontSize">
            iPhone用在庫管理アプリ開発(大学時代アルバイト)
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
              iPhone用在庫管理アプリのインターフェースの開発を担当。現行稼働している組込システム(ハンディ)をiPhoneアプリにリプレイス。Objective-Cによる画面表示、画面遷移、項目の入出力を実装。
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">【ロール/担当フェーズ】</Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              インターフェース開発
              <br />
              実装
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">
              【言語(FW)/DB/インフラ/ツール,その他】
            </Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              Objective-C
              <br />
              SQLite
              <br />
              Xcode
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">【習得技術】</Box>
          </Typography>
          <Typography>
            <Box color="text.primary" fontSize="caption.fontSize">
              プログラミングは初体験であったが、参考書やネット情報を参考にしてObjective-Cによるプログラミングスキルを身に付けることができた。また、DBまわりは自社ライブラリを流用し(C言語)開発効率を上げられる手法が勉強になった。
            </Box>
          </Typography>
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
  );
}
