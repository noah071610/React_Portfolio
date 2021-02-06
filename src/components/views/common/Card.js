import React from "react";
import styled from "styled-components";
import { MAIN_COLOR } from "../../config";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 0.5s;
  margin-bottom: 1.5rem;
`;

const ValueSquare = styled.div`
  width: 120px;
  position: relative;
  transition: 0.5s;
  margin: 1.5rem auto;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Img = styled.div`
  width: 100%;
  position: relative;
  transition: 0.5s;
  background-color: ${MAIN_COLOR};
  transform: skewY(-10deg);
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: #c3ffe1;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }
  &:after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 10px;
    height: 100%;
    background-color: #c3ffe1;
    transform-origin: left;
    transform: skewY(45deg);
    transition: 0.5s;
    border-bottom: 20px solid #d9d9d9;
  }
  &:hover {
  }
`;

const H4 = styled.h4`
  background-color: white;
  user-select: none;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 130px;
    background: linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.1));
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
    z-index: -1;
  }
`;
function Card(props) {
  const { contents } = props;
  return (
    <Wrapper>
      <ValueSquare>
        <Img>
          <img
            alt={contents.squareTitle}
            src={contents.src}
            style={{
              margin: "1rem 0",
              width: "60px",
            }}
          />
          <H4>{contents.squareTitle}</H4>
        </Img>
      </ValueSquare>
      <div style={{ width: "100%" }}>
        <h3>{contents.title}</h3>
        <p>{contents.desc}</p>
      </div>
    </Wrapper>
  );
}

export default Card;
