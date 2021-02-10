import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import { SquareBottom, SquareLeft, SquareRight } from "./views/common/Square";
import Navigation from "./views/Nav";
import Poster from "./views/Poster";
import SkillPage from "./views/SkillPage/SkillPage";
import PortfolioPage from "./views/PortfolioPage/PortfolioPage";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
  p{
    margin:0.5rem auto;
  }
  h1,
h2,
h3 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: @heading-color;
  font-weight: 500;
}
`;

const App = () => {
  return (
    <>
      <Global />
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Poster />
            <Navigation />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/skills" component={SkillPage} />
              <Route exact path="/portfolio" component={PortfolioPage} />
            </Switch>
            <SquareLeft />
            <SquareRight />
            <SquareBottom />
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
