import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PortfolioMainPage from "./views/PortfolioMainPage/PortfolioMainPage";
import { createGlobalStyle } from "styled-components";
import PortfolioPostPage from "./views/PortfolioMainPage/PortfolioSection/PortfolioPostPage";
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/antd.css";
import BlogMainPage from "./views/BlogMainPage/BlogMainPage";
import BlogTechPage from "./views/BlogMainPage/BlogTechPage/BlogTechPage";
import BlogPostPage from "./views/BlogMainPage/BlogPostPage/BlogPostPage";
import BlogClassPage from "./views/BlogMainPage/BlogClassPage/BlogClassPage";
import PageWrapper from "./views/BlogMainPage/_common/PageWrapper";

const GlobalStyles = createGlobalStyle`

.ant-row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.ant-table-pagination{
  display:none !important;
}

p{
  margin:0.5rem auto;
}
h1,
h2,
h3 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
h2{
  font-size:1.5rem;
}

a {
  color: black;
  text-decoration: none;
}

`;

const App = () => {
  AOS.init({ offset: 120 });
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Suspense fallback={<div>Loading...</div>}>
          <PageWrapper>
            <Route exact path="/" component={BlogMainPage} />
            <Route exact path="/tech" component={BlogTechPage} />
            <Route exact path="/daily" component={BlogTechPage} />
            <Route exact path="/class" component={BlogClassPage} />
            <Route exact path="/post/:id" component={BlogPostPage} />
            <Route exact path="/portfolio" component={PortfolioMainPage} />
            <Route exact path="/portfolio/:id" component={PortfolioPostPage} />
          </PageWrapper>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
