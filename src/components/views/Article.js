import React from "react";
import styled from "styled-components";
import Title from "./common/Title";
import { BG_COLOR, CARD_DESC_PS } from "../config";
import { Col, Row } from "antd";
import Card from "./common/Card";

const Div = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  text-align: center;
  background-color: white;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
`;
const Img = styled.img`
  width: 170px;
  height: 200px;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;

function Article() {
  const CardContents = [
    {
      squareTitle: "ProblemSolve",
      title: "문제인식 및 해결능력",
      desc: CARD_DESC_PS,
      src: "/images/ProblemSolve.png",
    },
    {
      squareTitle: "Cooperation",
      title: "소통과 협력",
      desc: CARD_DESC_PS,
      src: "/images/Cooperation.png",
    },
    {
      squareTitle: "Passion",
      title: "열정 그리고 도전",
      desc: CARD_DESC_PS,
      src: "/images/Passion.png",
    },
  ];
  return (
    <>
      <Div>
        <div style={{ padding: "1.5rem", backgroundColor: `${BG_COLOR}` }}>
          <Title title="Introduce" />
          <Row>
            <Col xs={24} md={12}>
              <Img src="./images/profile.jpg" />
            </Col>
            <Col xs={24} md={12}>
              <h3>
                반갑습니다. <br />
                코딩이 즐거운 <span className="marker">장현수</span> 입니다.
              </h3>
              <p>
                성급하지 않지만 꾸준히, 조급하기보단 꼼꼼히 신입 프론트엔드 개발자라는 목표를 향해
                걸어가고 있습니다. <br />
                지치면 잠시 쉬어가고, 또 힘이나면 힘껏 달려가며 누구보다 즐겁고 열정있게 코딩하고
                있습니다.
              </p>
            </Col>
          </Row>
        </div>
        <div style={{ padding: "1.5rem" }}>
          <Title title="Main Value" />
          <Row>
            <Col xs={24} md={8}>
              <Card contents={CardContents[0]} />
            </Col>
            <Col xs={24} md={8}>
              <Card contents={CardContents[1]} />
            </Col>
            <Col xs={24} md={8}>
              <Card contents={CardContents[2]} />
            </Col>
          </Row>
        </div>
      </Div>
    </>
  );
}

export default Article;
