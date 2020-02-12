import React from "react";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import HistoryCommonStyles from "./HistoryCommonStyles";
import EnergyWebServiceDetail from "../EnergyWebServiceDetail";
import Constant from "./Constant";

interface Props {
  history: string;
}

export default function HistoryCommonDetail(prop: Props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const classes = HistoryCommonStyles();
  const constant = Constant();

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        onClick={handleClickOpen("paper")}
        disableFocusRipple
        className={classes.buttonDetail}
        startIcon={<DescriptionOutlinedIcon style={{ fontSize: 12 }} />}
      >
        DETAIL
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        transitionDuration={{ enter: 600, exit: 350 }}
      >
        {(function() {
          switch (prop.history) {
            case constant.HistoryKey.energyWebService:
              return <EnergyWebServiceDetail />;
            case constant.HistoryKey.energyCloud:
              return <React.Fragment />;
            case constant.HistoryKey.membershipManagement:
              return <React.Fragment />;
            case constant.HistoryKey.financeCRM:
              return <React.Fragment />;
            case constant.HistoryKey.pos:
              return <React.Fragment />;
            case constant.HistoryKey.stockManagement:
              return <React.Fragment />;
            default:
              return <React.Fragment />;
          }
        })()}
        <DialogActions>
          <Button onClick={handleClose} className={classes.buttonDialogClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
