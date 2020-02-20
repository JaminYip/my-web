import React, { useRef } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import BookmarkBorderOutlined from "@material-ui/icons/BookmarkBorderOutlined";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Main from "./container/Main";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerRoot: {
      position: "sticky",
      top: "0px",
      background: "#000000",
      opacity: 0.7,
      zIndex: 10,
      [theme.breakpoints.down("sm")]: {
        marginTop: "23vh"
      },
      [theme.breakpoints.only("md")]: {
        marginTop: "84.5vh"
      },
      [theme.breakpoints.only("lg")]: {
        marginTop: "83vh"
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "87vh"
      }
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
      opacity: 0.4
    },
    tabItemsWrapper: {
      flexDirection: "row",
      color: "#ffffff",
      textTransform: "uppercase",
      "& svg, .material-icons": {
        fontSize: 15,
        margin: 2,
        marginTop: 6
      }
    }
  })
);

const scrollToRef = (ref: any) =>
  window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: "smooth" });

export default function CustomizedTabs() {
  const [tabIndex, setTabIndex] = React.useState(0);
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
            label={
              <Box
                fontSize="subtitle1.fontSize"
                fontFamily="Ubuntu Mono"
                letterSpacing={0.5}
              >
                About
              </Box>
            }
            icon={<InfoOutlinedIcon />}
          />
          <Tab
            classes={{
              root: classes.tabItemsRoot,
              wrapper: classes.tabItemsWrapper
            }}
            label={
              <Box
                fontSize="subtitle1.fontSize"
                fontFamily="Ubuntu Mono"
                letterSpacing={0.5}
              >
                Skills
              </Box>
            }
            icon={<SettingsOutlinedIcon />}
          />
          <Tab
            classes={{
              root: classes.tabItemsRoot,
              wrapper: classes.tabItemsWrapper
            }}
            label={
              <Box
                fontSize="subtitle1.fontSize"
                fontFamily="Ubuntu Mono"
                letterSpacing={0.5}
              >
                History
              </Box>
            }
            icon={<BookmarkBorderOutlined />}
          />
          <Tab
            classes={{
              root: classes.tabItemsRoot,
              wrapper: classes.tabItemsWrapper
            }}
            label={
              <Box
                fontSize="subtitle1.fontSize"
                fontFamily="Ubuntu Mono"
                letterSpacing={0.5}
              >
                Works
              </Box>
            }
            icon={<FormatListBulletedOutlinedIcon />}
          />
        </Tabs>
      </Container>
      <br />
      <Main containerIndex={tabIndex} />
    </div>
  );
}
