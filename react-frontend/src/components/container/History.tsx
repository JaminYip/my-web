import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import EnergyWebService from "../history/EnergyWebService";
import EnergyCloud from "../history/EnergyCloud";
import MembershipManagement from "../history/MembershipManagement";
import FinanceCRM from "../history/FinanceCRM";
import POS from "../history/POS";
import StockManagement from "../history/StockManagement";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timeLine: {
      borderLeft: "thin solid #bdbdbd",
      marginBottom: -30
    }
  })
);

export default function History() {
  const classes = useStyles();

  return (
    <Container>
      <Typography gutterBottom>
        <Box
          fontSize="h2.fontSize"
          fontWeight="fontWeightLight"
          letterSpacing={8}
        >
          History
        </Box>
        <Box
          fontSize="overline.fontSize"
          fontWeight="fontWeightLight"
          letterSpacing={6}
        >
          -業務経歴-
        </Box>
        <br />
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
          <Container>
            <Typography align="center">
              <Box
                fontSize="overline.fontSize"
                fontWeight="fontWeightLight"
                letterSpacing={5}
              >
                future
              </Box>
            </Typography>
          </Container>
        </Grid>
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <EnergyWebService />
          </Container>
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <Typography align="left">
              <Box fontSize={9}>
                <br />
                2019/02 -
              </Box>
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} xl={9} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <EnergyCloud />
          </Container>
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <Typography style={{ textAlign: "left" }}>
              <Box fontSize={9}>
                <br />
                2017/01 -
              </Box>
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} xl={9} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <Typography style={{ textAlign: "right" }}>
              <Box fontSize={9}>
                <br />
                2016/04 - 2016/12
              </Box>
            </Typography>
          </Container>
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <MembershipManagement />
          </Container>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} xl={9} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <FinanceCRM />
          </Container>
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <Typography style={{ textAlign: "left" }}>
              <Box fontSize={9}>
                <br />
                2014/07 - 2016/03
              </Box>
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} xl={9} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <Typography style={{ textAlign: "right" }}>
              <Box fontSize={9}>
                <br />
                2013/02 - 2013/03
              </Box>
            </Typography>
          </Container>
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <POS />
          </Container>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} xl={9} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <Typography style={{ textAlign: "right" }}>
              <Box fontSize={9}>
                <br />
                2012/08 - 2012/09
              </Box>
            </Typography>
          </Container>
        </Grid>
        <Typography style={{ borderLeft: "thin solid #bdbdbd" }} />
        <Grid item xs sm={4} md={4} lg={4} xl={4}>
          <Container disableGutters>
            <StockManagement />
          </Container>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
          <Container>
            <Typography align="center">
              <Box
                fontSize="overline.fontSize"
                fontWeight="fontWeightLight"
                letterSpacing={5}
              >
                past
              </Box>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
