import React, { Suspense } from "react";
import { PORTFOLIO_URL } from "./config";
import Nav from "./views/Nav";
import imgA from "../img/d.jpg";
import Article from "./views/Article";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img width="50%" height="50%" src={imgA} alt="s" />
          <div style={{ width: "50%", textAlign: "center" }}>
            <h2>Jang Hyun Soo</h2>
            <p>Hi, I'm a Web Developer</p>
          </div>
        </div>
        <Nav />
        <Article />
      </div>
    </Suspense>
  );
}

export default App;
