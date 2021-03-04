import { useDispatch, useSelector } from "react-redux";
import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { MODE_CHANGE } from "../../../_reducers";

const turning = keyframes`
to {
  transform: rotateY(360deg);
}
`;

const rotatingRight = keyframes`
 to {
   transform: rotateZ(360deg);
 }
`;

const rotatingLeft = keyframes`
 to {
   transform: rotateZ(-180deg);
 }
`;

const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 1.1rem;
    }
  }
`;

const PosterImg = styled.div`
  display: flex;
  justify-content: center;
  max-width: 450px;
  position: relative;
`;

const Title = styled.div`
  width: 80%;
  text-align: center;
  margin-bottom: 2rem;
  cursor: default;
  display: inline-block;
  .poster_name {
    font-size: 1.7rem;
    margin: 0;
    @media only screen and (min-width: 992px) {
      font-size: 1.2rem;
    }
  }
  &:hover {
    .poster_name {
      -webkit-animation: bounce 1s;
      animation: bounce 1s;
    }
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 1rem;
  }
`;

const Gear = styled.img`
  position: absolute;
  width: 8%;
  top: 20%;
  left: 20%;
  animation: ${rotatingRight} 3s infinite linear;
`;
const GearRight = styled.img`
  position: absolute;
  width: 5%;
  top: 25%;
  left: 25.8%;
  animation: ${rotatingLeft} 2.6s infinite linear;
`;

const LightModeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  transition: all 0.3s;
  &:hover {
    transform: rotateZ(360deg);
    color: orange;
  }
`;

const NightModeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  transition: all 0.3s;
  &:hover {
    transform: rotateY(360deg);
    color: #aab6fe;
  }
`;

const Poster = () => {
  const { posterName, postIntro } = useSelector((state) => state);
  const { theme } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onClickLightMode = () => {
    dispatch({
      type: MODE_CHANGE,
      data: "light",
    });
  };
  const onClickDarkMode = () => {
    dispatch({
      type: MODE_CHANGE,
      data: "dark",
    });
  };
  return (
    <PosterWrapper>
      <PosterImg>
        <img style={{ width: "80%" }} src={`/images/poster/skills.png`} alt={posterName} />
        <Gear src="images/poster/skills_decoration.png" />
        <GearRight src="images/poster/skills_decoration.png" />
      </PosterImg>
      <Title>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h2 className="poster_name">Jang Hyun Soo</h2>
          {theme === "light" ? (
            <NightModeIcon onClick={onClickDarkMode} icon={faMoon} />
          ) : (
            <LightModeIcon onClick={onClickLightMode} icon={faSun} />
          )}
        </div>
        <p>{postIntro && postIntro}</p>
      </Title>
    </PosterWrapper>
  );
};

export default Poster;
