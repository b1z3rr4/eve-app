import { GlobalTheme } from "@/application/libs/styling";
import AppRoute from "@/presentation/routes";
import { theme } from "@/presentation/theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <GlobalTheme theme={theme}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </GlobalTheme>
  );
}

export default App;
