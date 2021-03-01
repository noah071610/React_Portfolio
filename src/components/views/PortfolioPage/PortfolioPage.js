import React from "react";
import Articles from "../_common/Articles";
import PageWrapper from "../_common/PageWrapper";
import { Carousel } from "3d-react-carousal";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useRef } from "react";
import styled from "styled-components";
import PortfolioDetail from "./Section/PortfolioDetail";
import { useState } from "react";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={tilt} {...rest} />;
}

const PortfolioCard = styled(Tilt)`
  transform-style: preserve-3d;
`;

const PortfolioImg = styled.img`
  height: 350px;
  border-radius: 10px;
  padding: 0.1rem;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 992px) {
    height: 300px;
  }
  @media only screen and (max-width: 620px) {
    height: 200px;
  }
  @media only screen and (max-width: 420px) {
    height: 150px;
  }
`;

function PortfolioPage() {
  const [PortfolioNumber, setPortfolioNumber] = useState(1);

  const options = {
    scale: 1,
    speed: 500,
    max: 5,
  };

  let slides = [
    <PortfolioCard options={options}>
      <PortfolioImg id="1" src="images/portfolio_portfolio/thumbnail.png" alt="game" />
    </PortfolioCard>,
    <PortfolioCard options={options}>
      <PortfolioImg id="2" src="images/game.jpg" alt="game" />
    </PortfolioCard>,
    <PortfolioCard options={options}>
      <PortfolioImg id="3" src="images/game.jpg" alt="game" />
    </PortfolioCard>,
  ];

  const portfolioComponent = (PortfolioNumber) => {
    switch (PortfolioNumber) {
      case 1:
        return <PortfolioDetail />;
      case 2:
        return <h2>ss </h2>;

      default:
        break;
    }
  };
  const onClickCardHandler = (event) => {
    if (event.target.className === "slider-right") {
      setPortfolioNumber(PortfolioNumber + 1);
      return;
    }
    if (event.target.className === "slider-left") {
      setPortfolioNumber(PortfolioNumber - 1);
      return;
    }
  };
  if (PortfolioNumber === 0) {
    setPortfolioNumber(slides.length);
  }
  if (PortfolioNumber > slides.length) {
    setPortfolioNumber(1);
  }
  return (
    <>
      <PageWrapper>
        <Articles title="Portfolio" sub="항상 발전을 거듭하며 성장합니다.">
          <div style={{ padding: "2rem 0 3rem  0" }} onClick={onClickCardHandler}>
            <Carousel slides={slides} autoplay={false} interval={1000} />
          </div>
          {portfolioComponent(PortfolioNumber)}
        </Articles>
      </PageWrapper>
    </>
  );
}

export default PortfolioPage;
