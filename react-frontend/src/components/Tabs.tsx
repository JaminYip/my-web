import React, { useRef } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import BookmarkBorderOutlined from "@material-ui/icons/BookmarkBorderOutlined";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Main from "./container/Main";

const useStyles = makeStyles(() =>
  createStyles({
    containerRoot: {
      position: "sticky",
      top: "0px",
      background: "#000000",
      opacity: 0.7,
      zIndex: 10
    },
    tabsRoot: {
      "&:hover": {
        color: "#40a9ff",
        opacity: 1
      }
      //boxShadow: "inset 0 1px 0 0 #efefef",
      //overflow: "visible"
    },
    tabsFixed: {
      //overflow: "visible !important"
    },
    tabsIndicator: {
      height: 0,
      transform: "translateY(-51px)",
      backgroundColor: "#d10073"
    },
    tabItemsRoot: {
      lineHeight: "inherit",
      minHeight: 53,
      fontSize: 11,
      opacity: 0.4
    },
    tabItemsWrapper: {
      flexDirection: "row",
      letterSpacing: "2px",
      color: "#ffffff",
      textTransform: "uppercase",
      "& svg, .material-icons": {
        fontSize: 13,
        margin: 5
      }
    }
  })
);

const scrollToRef = (ref: any) =>
  window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: "smooth" });

export default function CustomizedTabs() {
  const [tabIndex, setTabIndex] = React.useState(1);
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const classes = useStyles();

  return (
    <div ref={myRef}>
      <Container className={classes.containerRoot} maxWidth="xl">
        <Tabs
          classes={{
            root: classes.tabsRoot,
            fixed: classes.tabsFixed,
            indicator: classes.tabsIndicator
          }}
          value={tabIndex}
          onChange={(e, index) => {
            setTabIndex(index);
            executeScroll();
          }}
          variant={"fullWidth"}
          centered
        >
          <Tab
            classes={{
              root: classes.tabItemsRoot,
              wrapper: classes.tabItemsWrapper
            }}
            label={"About"}
            icon={<InfoOutlinedIcon />}
          />
          <Tab
            classes={{
              root: classes.tabItemsRoot,
              wrapper: classes.tabItemsWrapper
            }}
            label={"Skills"}
            icon={<SettingsOutlinedIcon />}
          />
          <Tab
            classes={{
              root: classes.tabItemsRoot,
              wrapper: classes.tabItemsWrapper
            }}
            label={"History"}
            icon={<BookmarkBorderOutlined />}
          />
          <Tab
            classes={{
              root: classes.tabItemsRoot,
              wrapper: classes.tabItemsWrapper
            }}
            label={"Works"}
            icon={<FormatListBulletedOutlinedIcon />}
          />
        </Tabs>
      </Container>
      <br />
      <Main containerIndex={tabIndex} />
    </div>
  );
}
