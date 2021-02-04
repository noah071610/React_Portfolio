import React from "react";
import "./Poster.css";
import Card from "./Section/Card";

function Poster(props) {
  const openPoster = (e) => {
    const div = document.querySelectorAll(".hi");
    div.forEach((v) => {
      v.classList.remove("open");
    });
    e.currentTarget.classList.add("open");
  };
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          className="hi"
          style={{
            borderRadius: "3px",
            width: "100%",
            height: "33.3vh",
            background: `url(${props.url}) no-repeat`,
            backgroundSize: "100%",
            transition: ".5s",
          }}
          onClick={openPoster}
        >
          <Card name={props.name} />
        </div>
      </div>
    </>
  );
}

export default Poster;
