import React from "react";

function Card(props) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ margin: 0, textAlign: "center", color: "white" }}>{props.name}</h2>
    </div>
  );
}

export default Card;
