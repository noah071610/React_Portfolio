import { useDispatch, useSelector } from "react-redux";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import { SquareBottom, SquareLeft, SquareRight, SquareTop } from "./views/_common/Square";
import Navigation from "./views/HeadPage/Nav";
import Poster from "./views/HeadPage/Poster";
import SkillPage from "./views/SkillPage/SkillPage";
import PortfolioPage from "./views/PortfolioPage/PortfolioPage";
import PortfolioDetail from "./views/PortfolioPage/Section/PortfolioDetail";
import styled, { ThemeProvider } from "styled-components";
import BlogPage from "./views/BlogPage/BlogPage";
import BlogHashtagPage from "./views/BlogPage/BlogHashtagPage";
import ContactPage from "./views/ContactPage/ContactPage";
import Footer from "./views/FooterPage/Footer";
import { LOAD_INFO_REQUEST, LOAD_NAV_INFO } from "../_reducers";
import BlogPost from "./views/BlogPage/Section/BlogPost";
import AOS from "aos";
import "aos/dist/aos.css";
import PostEditForm from "./views/BlogPage/PostEditForm";
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

  const switchComponent = (mobileSize) => {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/skills" component={SkillPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/portfolio/:id" component={PortfolioDetail} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/blog/:page" component={BlogPage} />
        <Route exact path="/blog/edit/:id" component={PostEditForm} />
        <Route exact path="/blog/post/:id" component={BlogPost} />
        <Route exact path="/blog/hashtag/:name" component={BlogHashtagPage} />
        <Route exact path="/contact" render={() => <ContactPage mobileSize={mobileSize} />} />
      </Switch>
    );
  };
  useEffect(
    (mobileSize) => {
      switchComponent(mobileSize);
    },
    [mobileSize]
  );

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
              {switchComponent(mobileSize)}
              <SquareLeft />
              <SquareRight />
              <SquareBottom />
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
                {switchComponent(mobileSize)}
              </Page>
            </>
          )}
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
