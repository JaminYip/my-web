import React from "react";
import "./App.css";
import Top from "./components/Top";
import Menu from "./components/Menu";

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
    <div style={{ backgroundColor: "#fafafa" }}>
      <Top />
      <Menu />
    </div>
  );
};

export default App;
