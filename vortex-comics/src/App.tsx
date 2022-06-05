import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/variables";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeStyle} >
      <GlobalStyle />
      <Helmet>
        <title>Vortex Comics</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
    </ThemeProvider>
  )
}

export default App
