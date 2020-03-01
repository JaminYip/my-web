import React from "react";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";

interface Props {
  title: string;
  subheader: string;
  backgroundHex: string;
}

export default function HistoryCommonCardHeader(prop: Props) {
  return (
    <CardHeader
      title={
        <Box fontSize={12} color="#f4f5f7">
          {prop.title}
        </Box>
      }
      subheader={
        <Box fontSize={8} color="#f4f5f7">
          {prop.subheader}
        </Box>
      }
      style={{ background: prop.backgroundHex }}
    />
  );
}
