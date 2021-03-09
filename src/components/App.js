import { useSelector } from "react-redux";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import { ThemeProvider } from "styled-components";
import PortfolioPage from "./views/MainPage/PortfolioSection/PortfolioPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { darkTheme, lightTheme, GlobalStyles } from "./themes";

const App = () => {
  const [mobileSize, setmobileSize] = useState(null);
  const { theme } = useSelector((state) => state);

  useEffect(() => {
    function mediaQuery() {
      if (window.innerWidth >= 992) {
        setmobileSize(false);
      } else if (window.innerWidth < 992) {
        setmobileSize(true);
      }
    }
    window.addEventListener("resize", mediaQuery);
    window.addEventListener("DOMContentLoaded", mediaQuery);
    return () => {
      window.removeEventListener("resize", mediaQuery);
      window.removeEventListener("DOMContentLoaded", mediaQuery);
    };
  }, []);

  AOS.init({ offset: 120 });
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Route exact path="/" render={() => <MainPage mobileSize={mobileSize} />} />
          <Route
            exact
            path="/portfolio/:id"
            render={() => <PortfolioPage mobileSize={mobileSize} />}
          />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
