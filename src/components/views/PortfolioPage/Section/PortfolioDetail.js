import { Col, Row } from "antd";
import React from "react";
import { GRAY_COLOR, SUB_COLOR } from "../../../config";
import { GithubFilled } from "@ant-design/icons";
import styled from "styled-components";

const GitLink = styled.a`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  &:hover {
    color: ${SUB_COLOR};
  }
`;

function PortfolioDetail() {
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        textAlign: "start",
      }}
    >
      <h2 style={{ fontSize: "1.3rem", margin: "1.5rem 0" }}>
        반응형 포트폴리오 사이트 + 개인 블로그
        <GitLink href="https://www.youtube.com" target="_blank">
          <GithubFilled className="portfolio_icon" />
        </GitLink>
      </h2>
      <p>포트폴리오 및 개인 블로그 제작</p>
      <div
        style={{
          marginTop: "1.5rem",
          width: "100%",
          height: "1px",
          backgroundColor: GRAY_COLOR,
        }}
      />
      <div style={{ padding: "1.5rem 0" }}>
        <h2 style={{ fontWeight: "normal" }}>기본적인 디자인 부터 백엔드까지 완벽 섭렵</h2>
        <p>
          기초적인 설계부터 포토샵과 스케치를 이용한 디자인, 클라이언트&백서버, 데이터베이스와
          배포까지
        </p>
      </div>
      <Row style={{ padding: "1.5rem 0" }}>
        <Col data-aos="fade-right" data-aos-duration="500" xs={24} lg={12}>
          <img style={{ width: "100%" }} src="images/portfolio_image.png" alt="1" />
        </Col>
        <Col
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="300"
          style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
          xs={24}
          lg={12}
        >
          <h2 style={{ fontWeight: "normal" }}>반응형 중심의 깔끔한 UI/UX</h2>
          <p>
            어쩌구
            저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구
          </p>
        </Col>
      </Row>
      <Row style={{ padding: "1.5rem 0" }}>
        <Col data-aos="fade-right" data-aos-duration="600" xs={24} lg={12}>
          <img style={{ width: "100%" }} src="images/portfolio_image.png" alt="1" />
        </Col>
        <Col
          style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
          xs={24}
          lg={12}
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="800"
        >
          <h2 style={{ fontWeight: "normal" }}>포트폴리오 이름</h2>
          <p>
            어쩌구
            저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구저쩌구
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default PortfolioDetail;
