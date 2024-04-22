import { MyRoutes, Light, Dark } from "./index";
import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
export const ThemeContext = createContext(null);
function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyles />
        <MyRoutes />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default App;
