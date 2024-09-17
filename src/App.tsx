import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./presentation/contexts/ThemeContext";
import AppRoute from "./presentation/routes";
import { theme } from "./presentation/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
