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

const tabsStyles = makeStyles({
  root: {
    boxShadow: 'inset 0 1px 0 0 #efefef',
    overflow: 'visible',
  },
  fixed: {
    overflow: 'visible !important',
  },
  indicator: {
    height: 1,
    transform: 'translateY(-51px)',
    backgroundColor: '#262626',
  },
});

const tabItemStyles = makeStyles({
  root: {
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
  wrapper: {
    flexDirection: 'row',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    '& svg, .material-icons': {
      fontSize: 13,
      margin: 5,
    },
  },
});

const containerStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '0px',
    backgroundColor: '#fafafa',
  },
});

export default function CustomizedTabs() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabs = tabsStyles();
  const tabItems = tabItemStyles();
  const container = containerStyles();

  return (
    <React.Fragment>
    <Container maxWidth="lg" classes={container}>
    <Tabs
      classes={{
        root: tabs.root,
        fixed: tabs.fixed,
        indicator: tabs.indicator,
      }}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      centered
    >
      <Tab
        classes={{
          root: tabItems.root,
          wrapper: tabItems.wrapper,
        }} label={'About'} icon={<InfoOutlinedIcon />} />
      <Tab
        classes={{
          root: tabItems.root,
          wrapper: tabItems.wrapper,
        }} label={'Skills'} icon={<SettingsOutlinedIcon />} />
      <Tab
        classes={{
          root: tabItems.root,
          wrapper: tabItems.wrapper,
        }} label={'History'} icon={<BookmarkBorderOutlined />} />
      <Tab
        classes={{
          root: tabItems.root,
          wrapper: tabItems.wrapper,
        }} label={'Works'} icon={<FormatListBulletedOutlinedIcon />} />
    </Tabs>
    </Container>
    <br /><br /><br /><br />
    <GetPage pageIndex={tabIndex} />
    </React.Fragment>
  );
};