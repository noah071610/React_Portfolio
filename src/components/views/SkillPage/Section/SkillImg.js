import Row from "antd/lib/row";
import React from "react";
import styled from "styled-components";

const ImgWrapper = styled(Row)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Img = styled.img`
  max-width: 600px;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

function SkillImg() {
  return (
    <ImgWrapper data-aos="zoom-in" data-aos-delay="300" data-aos-duration="700">
      <Img alt="skill_model" src="./images/model.png" />
    </ImgWrapper>
  );
}

export default SkillImg;
