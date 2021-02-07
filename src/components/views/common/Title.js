import React from "react";
import styled from "styled-components";
import { GRAY_COLOR, MAIN_COLOR } from "../../config";

const Line = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: ${GRAY_COLOR};
  &:before {
    position: absolute;
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    left: 0;
    top: -0.2rem;
    background-color: ${MAIN_COLOR};
    border-radius: 50%;
  }
`;

function Title(props) {
  return (
    <>
      <h2 style={{ margin: 0, padding: "1.5rem 0 0.5rem 0" }}>{props.title}</h2>
      <Line></Line>
      <h3 style={{ margin: "0.5rem 0 3rem 0", color: "gray" }}>{props.sub}</h3>
    </>
  );
}

export default Title;
