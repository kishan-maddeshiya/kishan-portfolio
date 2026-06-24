import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/utilities.css";
import "./styles/animations.css";
import "./styles/globals.css";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
