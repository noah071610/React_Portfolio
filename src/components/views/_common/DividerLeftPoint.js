import React from "react";
import styled from "styled-components";
import { MAIN_COLOR } from "../../config";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
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

function DividerLeftPoint() {
  return <Div className="divider"></Div>;
}

export default DividerLeftPoint;
