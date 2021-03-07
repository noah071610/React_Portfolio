import React from "react";
import styled from "styled-components";
import { CardContents, SUB_COLOR } from "../../config";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import CardContent from "./CardContent";
import Articles from "../_common/Articles";
import PageWrapper from "../_common/PageWrapper";
import Title from "../_common/Title";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SkillSection from "./SkillSection/SkillSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import ContactSection from "./ContactSection/ContactSection";
import Footer from "./FooterSection/Footer";

const Img = styled.img`
  width: 170px;
  height: 200px;
  border-radius: 1rem;
  padding: 3px;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
`;

const IntroImg = styled.div`
  width: 50%;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const IntroMe = styled.div`
  width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h3 {
    font-size: 1.1rem;
  }
  & p {
    width: 90%;
    margin-left: 0;
  }
  & ul {
    margin-top: 0.5rem;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    p {
      margin: 0 auto;
    }
    ul {
      margin-top: 1rem;
    }
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: black;
  margin-right: 1rem;
  margin-left: 0.1rem;
  &:hover {
    color: ${SUB_COLOR};
  }
`;

const ValueCard = styled(Col)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 0.5s;
  margin-bottom: 1.5rem;
`;

const MainPage = ({ mobileSize }) => {
  return (
    <PageWrapper>
      <section id="aboutme">
        <Articles>
          <Title title="Introduce" sub="신뢰를 바탕으로 함께 발전합니다." />
          <Row>
            <IntroImg span={12}>
              <Img data-aos="fade-down" data-aos-duration="800" src="./images/profile.jpg" />
            </IntroImg>
            <IntroMe data-aos="fade-down" data-aos-duration="800" data-aos-delay="100" span={12}>
              <h3>
                신뢰를 주는 <span className="marker">장현수</span> 입니다.
              </h3>
              <p>
                성급하지 않지만 꾸준히, 누구보다 즐겁고 열정있게 신입 프론트엔드 개발자라는
                목표를향해 나아가고 있습니다.
              </p>
              <ul>
                <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="300">
                  <a href="https://github.com/noah071610" target="_blank" rel="noreferrer">
                    <SocialIcon className="social_icon" icon={faGithub} />
                  </a>
                </li>
                <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
                  <a
                    href="https://www.instagram.com/salmonchobab/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialIcon className="social_icon" icon={faInstagram} />
                  </a>
                </li>
                <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="500">
                  <a href="mailto:noah071610@naver.com">
                    <SocialIcon className="social_icon" icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </IntroMe>
          </Row>
        </Articles>
        <Articles>
          <Title title="Main Value" sub="저의 핵심가치는 기본 신뢰 열정 입니다." />
          <Row>
            <ValueCard
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-delay="400"
              xs={24}
              md={8}
            >
              <CardContent contents={CardContents[0]} />
            </ValueCard>
            <ValueCard
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-delay="600"
              xs={24}
              md={8}
            >
              <CardContent contents={CardContents[1]} />
            </ValueCard>
            <ValueCard
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-delay="700"
              xs={24}
              md={8}
            >
              <CardContent contents={CardContents[2]} />
            </ValueCard>
          </Row>
        </Articles>
      </section>
      <SkillSection id="skills" />
      <PortfolioSection id="portfolio" />
      <ContactSection id="contact" />
      {mobileSize ? null : <Footer />}
    </PageWrapper>
  );
};

export default MainPage;
