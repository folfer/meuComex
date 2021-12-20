import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../src/hooks/useContext";
import AOS from "aos";
import "aos/dist/aos.css";

import Routes from "./routes";

import { GlobalStyle } from "./styles/GlobalStyle";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <>
      <AuthProvider>
        <GlobalStyle />

        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
