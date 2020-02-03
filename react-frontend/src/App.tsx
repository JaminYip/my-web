import React from 'react';
//import logo from './logo.svg';
//import { withStyles } from '@material-ui/core/styles';
import './App.css';
//import AppBar from './AppBar'
import Nav from './Nav';
//import Hook from './Hook'
import bgImage from './bg.jpg'

// const styles = {
//     app: {
//         textAlign: 'center'
//     },
//     '@keyframes App-logo-spin': {
//         from: {
//             transform: 'rotate(0deg)'
//         },
//         to: {
//             transform: 'rotate(360deg)'
//         }
//     },
//     appLogo: {
//         animation: 'App-logo-spin infinite 20s linear',
//         height: '40vmin'
//     },
//     appHeader: {
//         backgroundColor: '#282c34',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontSize: 'calc(10px + 2vmin)',
//         color: 'white'
//     },
//     appLink: {
//         color: '#61dafb'
//     }
// };

const App: React.FC = () => {
  return (
    <div>
      <img className="bgImage" src={bgImage} alt="bgImage"/>
      <Nav />
    </div>
    );
}

export default App;