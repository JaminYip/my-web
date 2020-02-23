import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface Props {
  detailTitle: string;
  detailWork: string;
  detailRole: string;
  detailSkills: string;
  detailLearned: string;
}

function breakLine(text: string) {
  var regex = /(¥n)/g;
  return text.split(regex).map(function(line) {
    if (line.match(regex)) {
      return React.createElement("br");
    } else {
      return line;
    }
  });
}

export default function HistoryCommonCardDetail(prop: Props) {
  return (
    <React.Fragment>
      <DialogTitle>
        <Typography>
          <Box color="text.secondary" fontSize="subtitle2.fontSize">
            {prop.detailTitle}
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
              {breakLine(prop.detailWork)}
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">【ロール/担当フェーズ】</Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              {breakLine(prop.detailRole)}
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">
              【言語(FW)/DB/インフラ/ツール,その他】
            </Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              {breakLine(prop.detailSkills)}
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">【習得技術】</Box>
          </Typography>
          <Typography>
            <Box color="text.primary" fontSize="caption.fontSize">
              {breakLine(prop.detailLearned)}
            </Box>
          </Typography>
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
  );
}
