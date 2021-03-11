import { useSelector } from "react-redux";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PortfolioMainPage from "./views/PortfolioMainPage/PortfolioMainPage";
import { ThemeProvider } from "styled-components";
import PortfolioPostPage from "./views/PortfolioMainPage/PortfolioSection/PortfolioPostPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { darkTheme, lightTheme, GlobalStyles } from "./themes";
import BlogMainPage from "./views/BlogMainPage/BlogMainPage";

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
          <Route exact path="/" render={() => <PortfolioMainPage mobileSize={mobileSize} />} />
          <Route exact path="/blog" component={BlogMainPage} />
          <Route
            exact
            path="/portfolio/:id"
            render={() => <PortfolioPostPage mobileSize={mobileSize} />}
          />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
