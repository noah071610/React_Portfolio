import Col from "antd/lib/col";
import React from "react";
import styled from "styled-components";
import { BG_COLOR } from "../../../config";

const Img = styled.img`
  transition: 0.3s;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${BG_COLOR};
  &:hover {
    transform: scale(1.1);
  }
`;

const Signal = styled.div`
  position: relative;
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 0.5rem;
  background-color: green;
  &:before {
    content: "";
    position: absolute;
    height: 0.3rem;
    top: 0;
    right: 1.2px;
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    border-top-right-radius: 5px;
  }
`;

const Box = styled.div`
  width: 30%;
  margin: auto 0;

  @media only screen and (max-width: 420px) {
    padding-right: 0.2rem;
    h4 {
      font-size: 0.7rem;
    }
  }
`;

function SkillBox(props) {
  return (
    <Col xs={24} md={12} style={{ display: "flex", margin: "1.5rem auto" }}>
      <Box>
        <Img style={{ width: "60%" }} alt={props.name} src={props.src} />
        <h4 className="skill_box_title">
          {props.name}
          {props.level ? <Signal /> : null}
        </h4>
      </Box>
      <div style={{ width: "70%", display: "flex", alignItems: "center" }}>
        <p style={{ width: "90%", fontSize: "0.8rem", textAlign: "start", margin: "auto 0" }}>
          {props.desc}
        </p>
      </div>
    </Col>
  );
}

export default SkillBox;
