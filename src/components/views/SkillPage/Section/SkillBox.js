import Col from "antd/lib/col";
import React from "react";
import styled from "styled-components";
import { BG_COLOR } from "../../../config";
import SignalLight from "./SignalLight";

const Img = styled.img`
  transition: 0.3s;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${BG_COLOR};
  &:hover {
    transform: scale(1.1);
  }
`;

function SkillBox(props) {
  return (
    <Col xs={24} md={12} style={{ display: "flex", margin: "1.5rem auto" }}>
      <div style={{ width: "30%", margin: "auto 0" }}>
        <Img style={{ width: "60%" }} alt={props.name} src={props.src} />
        <h4 className="skill_box_title">{props.name}</h4>
        <SignalLight level={props.level} />
      </div>
      <div style={{ width: "70%", display: "flex", alignItems: "center" }}>
        <p style={{ width: "90%", fontSize: "0.8rem", textAlign: "start", margin: "auto 0" }}>
          {props.desc}
        </p>
      </div>
    </Col>
  );
}

export default SkillBox;
