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
    }
  })
);

export default function HistoryCommonStyles() {
  return useStyles();
}
