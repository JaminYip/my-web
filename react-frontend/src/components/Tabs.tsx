import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import BookmarkBorderOutlined from '@material-ui/icons/BookmarkBorderOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import { makeStyles } from '@material-ui/core/styles';
import GetPage from './pages/GetPage'

const useStyles = makeStyles({
  containerRoot: {
    position: 'sticky',
    top: '0px',
    backgroundColor: '#fafafa',
  },
  tabsRoot: {
    boxShadow: 'inset 0 1px 0 0 #efefef',
    overflow: 'visible',
  },
  tabsFixed: {
    overflow: 'visible !important',
  },
  tabsIndicator: {
    height: 1,
    transform: 'translateY(-51px)',
    backgroundColor: '#d10073',
  },
  tabItemsRoot: {
    lineHeight: 'inherit',
    minHeight: 53,
    //minWidth: 0,
    fontSize: 11,
    opacity: 0.4,
    '&:not(:last-child)': {
      //marginRight: 60,
      //[breakpoints.up('sm')]: {
      //  marginRight: 60,
      //},
    },
    //[breakpoints.up('md')]: {
    //  minWidth: 0,
    //},
  },
  tabItemsWrapper: {
    flexDirection: 'row',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    '& svg, .material-icons': {
      fontSize: 13,
      margin: 5,
    },
  },
});

export default function CustomizedTabs() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const classes = useStyles();

  return (
    <React.Fragment>
    <Container maxWidth="lg" className={classes.containerRoot}>
    <Tabs
      classes={{
        root: classes.tabsRoot,
        fixed: classes.tabsFixed,
        indicator: classes.tabsIndicator,
      }}
      value={tabIndex}
      onChange={
        (e, index) => {
          setTabIndex(index);
          //window.scrollTo(0, ?);
        }
      }
      variant = {'fullWidth'}
      centered
    >
      <Tab
        classes={{
          root: classes.tabItemsRoot,
          wrapper: classes.tabItemsWrapper,
        }} label={'About'} icon={<InfoOutlinedIcon />} />
      <Tab
        classes={{
          root: classes.tabItemsRoot,
          wrapper: classes.tabItemsWrapper,
        }} label={'Skills'} icon={<SettingsOutlinedIcon />} />
      <Tab
        classes={{
          root: classes.tabItemsRoot,
          wrapper: classes.tabItemsWrapper,
        }} label={'History'} icon={<BookmarkBorderOutlined />} />
      <Tab
        classes={{
          root: classes.tabItemsRoot,
          wrapper: classes.tabItemsWrapper,
        }} label={'Works'} icon={<FormatListBulletedOutlinedIcon />} />
    </Tabs>
    </Container>
    <br /><br /><br /><br />
    <GetPage pageIndex={tabIndex} />
    </React.Fragment>
  );
};