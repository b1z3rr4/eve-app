import "react-toastify/dist/ReactToastify.css";

import { GlobalTheme } from "@/application/libs/styling";
import AppRoute from "@/presentation/routes";
import { theme } from "@/presentation/theme";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppBar } from "./presentation/components/features/AppBar/AppBar";
import { AuthProvider } from "./presentation/contexts/AuthContext";

function App() {
  return (
    <GlobalTheme theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <AppBar />
          <AppRoute />
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </GlobalTheme>
  );
}

export default App;
