import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { SquareRight, SquareLeft } from "./common/Square";

const turning = keyframes`
to {
  transform: rotateY(360deg);
}
`;

const Heart = styled.img`
  position: absolute;
  width: 8%;
  bottom: 55%;
  right: 27%;
  animation: ${turning} 2s infinite;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 450px;
  position: relative;
`;

function Poster() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ImageWrapper>
        <Heart src="/images/heart.png" />
        <img style={{ width: "80%" }} src="/images/posterImg.png" alt="posterImg" />
      </ImageWrapper>

      <div style={{ textAlign: "center" }}>
        <h2>Jang Hyun Soo</h2>
        <p>Hi, I'm a Web Developer</p>
      </div>
      <div>
        <SquareLeft />
        <SquareRight />
      </div>
    </div>
  );
}

export default Poster;
