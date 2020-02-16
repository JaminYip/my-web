import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function POSDetail() {
  return (
    <React.Fragment>
      <DialogTitle>
        <Typography color="textSecondary">
          <Box fontSize="subtitle2.fontSize">
            iPad用POSアプリ開発(大学時代アルバイト)
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
              iPad用POSアプリのインターフェースの開発を担当。Objective-Cによる画面表示、画面遷移、項目の入出力、カスタムキーボード、グリッド描画機能を実装。
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
              Objective-Cによるプログラミングスキルの向上を図ることができた。可変グリッドレイアウトの描画、カスタムキーボード機能の実装はネット情報のリサーチにより実現できたため、自走力を鍛えることができた。
            </Box>
          </Typography>
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
  );
}
