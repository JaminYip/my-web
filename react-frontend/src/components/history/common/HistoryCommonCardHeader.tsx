import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface Props {
  title: string;
  subheader: string;
  backgroundHex: string;
}

export default function HistoryCommonCardHeader(prop: Props) {
  return (
    <CardHeader
      title={
        <Typography>
          <Box fontSize={12} color="white">
            {prop.title}
          </Box>
        </Typography>
      }
      subheader={
        <Typography>
          <Box fontSize={8} color="white">
            {prop.subheader}
          </Box>
        </Typography>
      }
      style={{ background: prop.backgroundHex }}
    />
  );
}
