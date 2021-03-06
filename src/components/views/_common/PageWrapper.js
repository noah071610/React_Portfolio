import { DoubleLeftOutlined } from "@ant-design/icons";
import React from "react";
import styled, { keyframes } from "styled-components";

const Div = styled.div`
  position: relative;
  width: 95%;
  border-radius: 5px;
  margin: 1.5rem 0;
  text-align: center;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;
const scrollEffect = keyframes`
to {
  opacity: 0.2;
}
`;
const Scroll = styled.div`
  opacity: 0.5;
  position: fixed;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 2rem;
  z-index: 10;
  cursor: pointer;
  animation: ${scrollEffect} 1s linear infinite alternate;
`;

function PageWrapper({ children }) {
  return (
    <Div className="pageWrapper">
      {children}
      <Scroll className="scroll">
        <DoubleLeftOutlined
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          rotate={90}
        />
      </Scroll>
    </Div>
  );
}

export default PageWrapper;
