import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { ThemeProvider } from "./theme";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <TooltipProvider>
      <App />
    </TooltipProvider>
    <Toaster />
  </ThemeProvider>
);
