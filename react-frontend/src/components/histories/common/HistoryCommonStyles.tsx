import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.5))"
    },
    cardHeaderText: {
      color: "#ffffff"
    },
    chipProcess: {
      margin: theme.spacing(0.2),
      fontSize: 9,
      borderColor: "#5c5796",
      color: "#5c5796"
    },
    chipSkills: {
      margin: theme.spacing(0.2),
      fontSize: 9,
      borderColor: "#852576",
      color: "#852576"
    },
    footerTypography: {
      marginTop: "15px",
      marginBottom: "-15px",
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    buttonDetail: {
      background: "#888888",
      color: "#ffffff",
      filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.4))",
      border: 0,
      fontSize: 9,
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      marginLeft: theme.spacing(1.0),
      textTransform: "none",
      "&:hover": {
        background: "#ffffff",
        color: "#888888",
        opacity: 1
      }
    },
    buttonDialogClose: {
      color: "#888888",
      fontSize: 13,
      textTransform: "none"
    }
  })
);

export default function HistoryCommonStyles() {
  return useStyles();
}
