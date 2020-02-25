import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import HistoryCommonCardHeader from "./HistoryCommonCardHeader";
import HistoryCommonCardContent from "./HistoryCommonCardContent";
import HistoryCommonCardDetail from "./HistoryCommonCardDetail";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface Props {
  title: string;
  subheader: string;
  backgroundHex: string;
  overview: string;
  process: string[];
  skills: string[];
  detailTitle: string;
  detailWork: string;
  detailRole: string;
  detailSkills: string;
  detailLearned: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.5))",
      transition: "0.5s",
      "&:hover": {
        transform: "scale(1.03,1.03)",
        opacity: 0.95
      }
    },
    button: {
      color: "gray",
      fontSize: 13,
      textTransform: "none"
    }
  })
);

export default function HistoryCommonCard(prop: Props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const classes = useStyles();

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card variant="outlined" className={classes.card}>
      <CardActionArea onClick={handleClickOpen("paper")}>
        <HistoryCommonCardHeader
          title={prop.title}
          subheader={prop.subheader}
          backgroundHex={prop.backgroundHex}
        />
        <HistoryCommonCardContent
          overview={prop.overview}
          process={prop.process}
          skills={prop.skills}
        />
      </CardActionArea>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        transitionDuration={{ enter: 600, exit: 350 }}
      >
        <HistoryCommonCardDetail
          detailTitle={prop.detailTitle}
          detailWork={prop.detailWork}
          detailRole={prop.detailRole}
          detailSkills={prop.detailSkills}
          detailLearned={prop.detailLearned}
        />
        <DialogActions>
          <Button onClick={handleClose} className={classes.button}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
