import React from "react";
import "./App.css";
import Loading from "./components/Loading";
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

const LoadingPage = () => (
  <div style={{ backgroundColor: "black" }}>
    <Loading />
  </div>
);

const topPage = () => (
  <div style={{ backgroundColor: "#fafafa" }}>
    <Top />
    <Menu />
  </div>
);

const useDelay = (ms: number) => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), ms);
  });
  return loading;
};

const App: React.FC = () => {
  const loading = useDelay(4500);

  return (
    <React.Fragment>
      {loading && LoadingPage()}
      {!loading && topPage()}
    </React.Fragment>
  );
};

export default App;
