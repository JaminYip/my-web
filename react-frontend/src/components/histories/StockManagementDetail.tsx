import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600]
    },
    button: {
      margin: theme.spacing(1.0),
      fontSize: 9
    }
  })
);

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        being prepared
      </DialogTitle>
    </Dialog>
  );
}

export default function StockManagementDetailButton() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        onClick={handleClickOpen}
        disableFocusRipple
        className={classes.button}
        startIcon={<DescriptionOutlinedIcon style={{ fontSize: 12 }} />}
      >
        DETAIL
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}


//       <List>
//         {emails.map(email => (
//           <ListItem
//             button
//             onClick={() => handleListItemClick(email)}
//             key={email}
//           >
//             <ListItemAvatar>
//               <Avatar className={classes.avatar}>
//                 <PersonIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={email} />
//           </ListItem>
//         ))}
//         <ListItem
//           autoFocus
//           button
//           onClick={() => handleListItemClick("addAccount")}
//         >
//           <ListItemAvatar>
//             <Avatar>
//               <AddIcon />
//             </Avatar>
//           </ListItemAvatar>
//           <ListItemText primary="Add account" />
//         </ListItem>
//       </List>