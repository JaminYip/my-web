import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TopPage from './TopPage';
import AboutPage from './AboutPage';

enum Page {
  Top,
  About,
  Skills,
  CareerHistory,
}

export default function GetPage(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#ffffff', color: '#555555', height: '100vh' }} >
          {
            function() {
              switch(props.pageIndex) {
                case Page.Top:
                  return (<TopPage />);
                case Page.About:
                  return (<AboutPage />);
                case Page.Skills:
                  return (<div>Skills</div>);
                case Page.CareerHistory:
                  return (<div>CareerHistory</div>);
                default:
                  return (<React.Fragment />);
              }
            }()
          }
        </Typography>
      </Container>
    </React.Fragment>
  );
}