import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import PersonIcon from '@material-ui/icons/Person';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import MoodIcon from '@material-ui/icons/Mood';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
// import LaptopMacOutlinedIcon from '@material-ui/icons/LaptopMacOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import GetPage from './components/pages/GetPage'

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
    //backgroundColor: '#ffffff',
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 20,
      fontWeight: theme.typography.fontWeightRegular,
      marginLeft: theme.spacing(5),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        //color: '#40a9ff',
        color: '#40a9ff',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    //backgroundColor: '#a5076e',
    '& > div': {
      //maxWidth: 40,
      maxWidth: 60,
      width: '100%',
      //backgroundColor: '#635ee7',
      backgroundColor: '#a5076e',
    },
  },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      //fontSize: theme.typography.pxToRem(15),
      fontSize: theme.typography.pxToRem(18),
      marginLeft: theme.spacing(5),
      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    //padding: theme.spacing(3),
    padding: theme.spacing(1),
  },
  tabTop: {
    position: 'sticky',
    top: '0',
    backgroundColor: theme.palette.background.paper,
  },
  tabBottom: {
    position: 'sticky',
    top: '65px',
    //backgroundColor: '#000000',
    background: 'linear-gradient(45deg, #000000 45%, #eeeeee 95%)',
    //background: 'linear-gradient(.25turn, #eeeeee, #000000 5%, #000000 50%, #000000 5%, #eeeeee)',
    backgroundColor: 'rgba(0,0,0,1)',
    //backgroundColor: '#2e1534',
    //backgroundColor: 'rgba(46,21,52,0.8)',
    //backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    //const targetElement = document.getElementById("tabs");
    //const clientRect = targetElement.getBoundingClientRect();
    //const test = event.target();
    //const test = event.target.getBoundingClientRect().height;
    //console.log(test);
    //window.scrollTo({top: window.scrollY, left: 0, behavior: 'smooth'});
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabTop}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab icon={<HomeOutlinedIcon />} />
          <AntTab icon={<FaceOutlinedIcon />} />
          <AntTab icon={<SettingsOutlinedIcon />} />
          <AntTab icon={<WorkOutlineOutlinedIcon />} />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
      <div className={classes.tabBottom}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Top" />
          <StyledTab label="About" />
          <StyledTab label="Skills" />
          <StyledTab label="Career History" />
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
      <br /><br /><br /><br />
      <GetPage pageIndex={value} />
    </div>
  );
}