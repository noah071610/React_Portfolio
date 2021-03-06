import { useDispatch, useSelector } from "react-redux";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import { SquareBottom, SquareLeft, SquareRight, SquareTop } from "./views/_common/Square";
import Navigation from "./views/HeadPage/Nav";
import Poster from "./views/HeadPage/Poster";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./views/FooterPage/Footer";
import { LOAD_INFO_REQUEST, LOAD_NAV_INFO } from "../_reducers";
import AOS from "aos";
import "aos/dist/aos.css";
import { darkTheme, lightTheme, GlobalStyles } from "./themes";

const MobileHome = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const AsideMenu = styled.div`
  width: 25%;
  height: 100%;
  position: fixed;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const Page = styled.div`
  position: absolute;
  right: 0;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  const dispatch = useDispatch();
  const [mobileSize, setmobileSize] = useState(null);
  const { postIntro, pageNumber, posterName, theme } = useSelector((state) => state);

  useEffect(() => {
    if (localStorage.navInfo) {
      dispatch({
        type: LOAD_NAV_INFO,
        data: JSON.parse(localStorage.navInfo),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.navInfo = JSON.stringify({ postIntro, pageNumber, posterName });
  }, [pageNumber, postIntro, posterName]);

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

  useEffect(() => {
    dispatch({
      type: LOAD_INFO_REQUEST,
    });
  }, [dispatch]);

  AOS.init({ offset: 120 });
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          {mobileSize ? (
            <MobileHome>
              <Poster />
              <Navigation mobileSize={mobileSize} />
              <Route exact path="/" render={() => <MainPage mobileSize={mobileSize} />} />
              <SquareLeft />
              <SquareRight />
              <Footer />
            </MobileHome>
          ) : (
            // BIG SIZE
            <>
              <AsideMenu>
                <Poster />
                <Navigation mobileSize={mobileSize} />
                <SquareBottom />
              </AsideMenu>
              <Page>
                <SquareTop />
                <Route exact path="/" render={() => <MainPage mobileSize={mobileSize} />} />
              </Page>
            </>
          )}
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
