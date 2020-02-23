import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";

interface Props {
  overview: string;
  process: string[];
  skills: string[];
  styles: any;
}

function GetChip(chipList: string[], styles: any) {
  const list = [];

  for (const i in chipList) {
    list.push(
      <Chip
        variant="outlined"
        size="small"
        label={chipList[i]}
        className={styles}
      />
    );
  }

  return list;
}

export default function HistoryCommonCardContent(prop: Props) {
  const processChip = GetChip(prop.process, prop.styles.chipProcess);
  const skillsChip = GetChip(prop.skills, prop.styles.chipSkills);

  return (
    <CardContent>
      <Typography>
        <Box fontSize={11} color="text.secondary">
          ＜概要＞
        </Box>
      </Typography>
      <Typography gutterBottom>
        <Box fontSize={10.5} color="text.primary">
          {prop.overview}
        </Box>
      </Typography>
      <Typography>
        <Box fontSize={11} color="text.secondary">
          ＜担当フェーズ＞
        </Box>
      </Typography>
      <Typography gutterBottom>{processChip}</Typography>
      <Typography>
        <Box fontSize={11} color="text.secondary">
          ＜経験技術＞
        </Box>
      </Typography>
      <Typography gutterBottom>{skillsChip}</Typography>
      <Typography className={prop.styles.footerTypography} />
    </CardContent>
  );
}
