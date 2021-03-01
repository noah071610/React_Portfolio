import Row from "antd/lib/row";
import React from "react";
import Articles from "../_common/Articles";
import PageWrapper from "../_common/PageWrapper";
import SkillBox from "./Section/SkillBox";
import SkillImg from "./Section/SkillImg";
import { skills, languages } from "../../config";

const SkillPage = () => {
  return (
    <PageWrapper>
      <Articles title="Skills" sub="없어선 안될 실력있는 프론트엔드 개발자를 지향합니다.">
        <SkillImg />
      </Articles>
      <Articles title="Skill Lists">
        <Row>
          {skills.map((skill, i) => (
            <SkillBox
              key={"skill" + i}
              name={skill.name}
              src={skill.src}
              desc={skill.desc}
              level={skill.level}
            />
          ))}
        </Row>
      </Articles>
      <Articles title="Language skill" sub="글로벌 인재의 필수조건">
        <Row>
          {languages.map((lan, i) => (
            <SkillBox
              key={"lan" + i}
              name={lan.name}
              src={lan.src}
              desc={lan.desc}
              level={lan.level}
            />
          ))}
        </Row>
      </Articles>
    </PageWrapper>
  );
};

export default SkillPage;
