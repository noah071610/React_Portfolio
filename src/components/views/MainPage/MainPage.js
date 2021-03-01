import React from "react";
import styled from "styled-components";
import { CardContents, dataSource } from "../../config";
import Table from "antd/lib/table";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Card from "./Section/Card";
import Articles from "../_common/Articles";
import PageWrapper from "../_common/PageWrapper";
import media from "styled-media-query";

const Img = styled.img`
  width: 170px;
  height: 200px;
  border-radius: 1rem;
  padding: 3px;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
`;

const HistoryTable = styled(Table)`
  margin-bottom: 1.5rem;
`;

const IntroMe = styled(Col)`
  & p {
    width: 70%;
  }
  ${media.greaterThan("medium")`
text-align:start;
display:flex;
flex-direction:column;
justify-content:center;
& h3 {
  font-size:1.1rem;
}
& p {
  width: 90%;
  margin-left:0;
}
`}
`;

const MainPage = () => {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Summary",
      dataIndex: "summary",
      key: "summary",
    },
  ];
  return (
    <>
      <PageWrapper>
        <Articles title="Introduce" sub="신뢰를 바탕으로 함께 발전합니다.">
          <Row>
            <Col style={{ marginBottom: "1.5rem" }} xs={24} md={12}>
              <Img data-aos="fade-down" data-aos-duration="800" src="./images/profile.jpg" />
            </Col>
            <IntroMe
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
              xs={24}
              md={12}
            >
              <h3>
                신뢰를 주는 <span className="marker">장현수</span> 입니다.
              </h3>
              <p>
                성급하지 않지만 꾸준히, 누구보다 즐겁고 열정있게 신입 프론트엔드 개발자라는
                목표를향해 나아가고 있습니다.
              </p>
            </IntroMe>
          </Row>
        </Articles>
        <Articles title="Main Value" sub="저의 핵심가치는 기본 신뢰 열정 입니다.">
          <Row>
            <Col data-aos="flip-up" data-aos-duration="500" data-aos-delay="400" xs={24} md={8}>
              <Card contents={CardContents[0]} />
            </Col>
            <Col data-aos="flip-up" data-aos-duration="500" data-aos-delay="600" xs={24} md={8}>
              <Card contents={CardContents[1]} />
            </Col>
            <Col data-aos="flip-up" data-aos-duration="500" data-aos-delay="700" xs={24} md={8}>
              <Card contents={CardContents[2]} />
            </Col>
          </Row>
        </Articles>
        <Articles title="History" sub="장현수가 걸어온 길을 소개합니다.">
          <HistoryTable dataSource={dataSource} columns={columns} pagination={false} />
        </Articles>
      </PageWrapper>
    </>
  );
};

export default MainPage;
