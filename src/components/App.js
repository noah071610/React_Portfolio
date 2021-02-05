import React, { Suspense, useEffect, useState } from "react";
import Article from "./views/Article";
import { SquareBottom } from "./views/common/Square";
import Navigation from "./views/Nav";
import Poster from "./views/Poster";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Poster />
        <Navigation />

        <Article />
        <SquareBottom />
      </div>
    </Suspense>
  );
}

export default App;
