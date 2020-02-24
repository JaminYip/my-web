import React, { useRef } from "react";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
      top: "0",
      marginTop: 1,
      background: "#113336",
      opacity: 0.8,
      zIndex: 10
    },
    tabsRoot: {
      "&:hover": {
        //color: "#511135",
        color: "black",
        opacity: 1
      },
      //boxShadow: "inset 0 1px 0 0 #efefef",
      overflow: "visible"
    },
    tabsFixed: {
      overflow: "visible !important"
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
      color: "white",
      textTransform: "uppercase",
      "& svg, .material-icons": {
        fontSize: 15,
        margin: 3
      }
    }
  })
);

const scrollToRef = (ref: any) =>
  window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: "smooth" });

export default function Menu() {
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
            label={
              <Box
                fontSize="subtitle1.fontSize"
                fontFamily="Ubuntu Mono"
                letterSpacing={0.5}
                mb={0.5}
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
                mb={0.5}
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
                mb={0.5}
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
                mb={0.5}
              >
                Work
              </Box>
            }
            icon={<FormatListBulletedOutlinedIcon />}
          />
        </Tabs>
      </Container>
      <Main containerIndex={tabIndex} />
      <Container maxWidth="lg">
        <Typography style={{ textAlign: "right" }}>
          <Box
            color="text.secondary"
            fontSize="overline.fontSize"
            fontFamily="Ubuntu Mono"
          >
            ©︎ 2020 Jamin Yip.
          </Box>
        </Typography>
      </Container>
    </div>
  );
}
