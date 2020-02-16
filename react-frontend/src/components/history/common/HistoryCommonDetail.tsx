import React from "react";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HistoryCommonStyles from "./HistoryCommonStyles";
import EnergyWebServiceDetail from "../EnergyWebServiceDetail";
import EnergyCloudDetail from "../EnergyCloudDetail";
import FinanceCRMDetail from "../FinanceCRMDetail";
import POSDetail from "../POSDetail";
import StockManagementDetail from "../StockManagementDetail";
import MembershipManagementDetail from "../MembershipManagementDetail";
import HistoryConstant from "./HistoryConstant";

interface Props {
  history: string;
}

export default function HistoryCommonDetail(prop: Props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const classes = HistoryCommonStyles();
  const historyId = HistoryConstant();

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
        endIcon={<ExpandMoreIcon style={{ fontSize: 12 }} />}
      >
        See More
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        transitionDuration={{ enter: 600, exit: 350 }}
      >
        {(function() {
          switch (prop.history) {
            case historyId.energyWebService:
              return <EnergyWebServiceDetail />;
            case historyId.energyCloud:
              return <EnergyCloudDetail />;
            case historyId.membershipManagement:
              return <MembershipManagementDetail />;
            case historyId.financeCRM:
              return <FinanceCRMDetail />;
            case historyId.pos:
              return <POSDetail />;
            case historyId.stockManagement:
              return <StockManagementDetail />;
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
