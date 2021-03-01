import React from "react";
import styled from "styled-components";

const Signal = styled.div`
  position: relative;

  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.color};
  margin: 0 0.2rem;
  &:before {
    content: "";
    position: absolute;
    height: 0.3rem;
    top: 0;
    right: 1.2px;
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    border-top-right-radius: 5px;
  }
`;

function SignalLight(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Signal color={props.level === "high" ? "green" : "gray"}></Signal>
      <Signal color={props.level === "middle" ? "#FFD600" : "gray"}></Signal>
      <Signal color={props.level === "low" ? "rgb(255, 137, 27)" : "gray"}></Signal>
    </div>
  );
}

export default SignalLight;
