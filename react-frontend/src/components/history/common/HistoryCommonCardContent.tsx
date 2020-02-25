import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface Props {
  overview: string;
  process: string[];
  skills: string[];
}

function GetChip(chipList: string[]) {
  const list = [];

  for (const i in chipList) {
    list.push(
      <Chip
        variant="outlined"
        size="small"
        label={chipList[i]}
        style={{ fontSize: 9, margin: 2, borderColor: "gray", color: "white" }}
      />
    );
  }

  return list;
}

export default function HistoryCommonCardContent(prop: Props) {
  const processChip = GetChip(prop.process);
  const skillsChip = GetChip(prop.skills);

  return (
    <div style={{ background: "#616161" }}>
      <CardContent>
        <Typography>
          <Box fontSize={11} color="lightGray">
            ＜概要＞
          </Box>
        </Typography>
        <Typography gutterBottom>
          <Box fontSize={10.5} color="white">
            {prop.overview}
          </Box>
        </Typography>
        <Typography>
          <Box fontSize={11} color="lightGray">
            ＜担当フェーズ＞
          </Box>
        </Typography>
        <Typography gutterBottom>{processChip}</Typography>
        <Typography>
          <Box fontSize={11} color="lightGray">
            ＜経験技術＞
          </Box>
        </Typography>
        <Typography>{skillsChip}</Typography>
      </CardContent>
      <Typography style={{ display: "flex" }}>
        <Box ml={2} mb={1} color="#b2dfdb" fontSize={11}>
          SEE MORE
        </Box>
        <Box ml={0.5} mb={1} color="#b2dfdb">
          <ExpandMoreIcon style={{ fontSize: 11, marginBottom: 4 }} />
        </Box>
      </Typography>
    </div>
  );
}
