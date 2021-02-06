import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./views/MainPage";
import { SquareBottom, SquareLeft, SquareRight } from "./views/common/Square";
import Navigation from "./views/Nav";
import Poster from "./views/Poster";

const App = () => {
  return (
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
            <Route exact path="/skills" component={MainPage} />
          </Switch>
          <SquareLeft />
          <SquareRight />
          <SquareBottom />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
