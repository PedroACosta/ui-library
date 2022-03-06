import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ThemeProvider, {
  SystemThemeContext,
} from "./system/theme/ThemeProvider";
import FlexStack from "./components/Layout/FlexStack";
import { useTheme } from "@emotion/react";
import { ITheme } from "./system/system.types";

function App() {
  const theme = useTheme() as ITheme["theme"];
  const { themeName, toggleTheme } = React.useContext(SystemThemeContext);
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FlexStack as="div" textTransform="uppercase" wrap="wrap" p={theme.space[8]}>
          <p>The theme used is: {themeName}</p>

          <button style={{width: '100%'}} type="button" onClick={() => toggleTheme()}>
            change theme
          </button>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </FlexStack>
        <p>Hello Vite + React!</p>
        <p></p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

const ContainerApp = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default ContainerApp;
