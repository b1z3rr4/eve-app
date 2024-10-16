import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./presentation/components/features/ErrorBoundary/index.tsx";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
