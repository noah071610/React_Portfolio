import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { SUB_COLOR } from "../../config";
import "antd/dist/antd.css";
import { navContents } from "../../config";
import { useDispatch } from "react-redux";
import { PAGE_CHANGE } from "../../../_reducers";
import Scrollspy from "react-scrollspy";

const NavLink = styled.a`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transition: 0.3s;
  &:hover {
    background: ${SUB_COLOR};
    color: white;
  }
  @media only screen and (min-width: 992px) {
    height: 2.9rem;
  }
`;

const List = styled.li`
  transition: all 0.3s;
  width: 30%;
`;

const ExplainNav = styled.span`
  display: none;
`;

const Navigation = ({ mobileSize }) => {
  const dispatch = useDispatch();
  const [FixedNavbar, setFixedNavbar] = useState(false);

  const onClickHandler = (i) => {
    dispatch({
      type: PAGE_CHANGE,
      pageNumber: i,
      posterName: navContents[i].name,
      postIntro: navContents[i].intro,
    });
    if (window.scrollY > 493) {
      window.scrollTo({
        top: 0,
      });
    }
  };
  useEffect(() => {
    function scrollCallBack() {
      if (window.scrollY > 493) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    }
    if (mobileSize) {
      window.addEventListener("scroll", scrollCallBack);
    } else {
      return;
    }
    return () => {
      if (mobileSize) {
        window.removeEventListener("scroll", scrollCallBack);
      } else {
        return;
      }
    };
  }, [mobileSize]);

  const navRow = (navContents) => {
    return navContents.map((v, i) => (
      <List key={i} onClick={() => onClickHandler(i)}>
        <NavLink href={`#${v.name}`}>
          <FontAwesomeIcon icon={v.icon} />
          <ExplainNav>{v.explain}</ExplainNav>
        </NavLink>
      </List>
    ));
  };
  const navCoulmn = (navContents) => {
    return navContents.map((v, i) => (
      <li
        key={i}
        onClick={() => onClickHandler(i)}
        style={{ transition: "all 0.3s", width: "100%" }}
      >
        <NavLink href={`#${v.name}`}>
          <FontAwesomeIcon icon={v.icon} />
          <span style={{ marginLeft: "1rem" }}>{v.explain}</span>
        </NavLink>
      </li>
    ));
  };
  return (
    <>
      <Scrollspy
        items={["aboutme", "skills", "portfolio", "contact"]}
        currentClassName="is-current"
        className={FixedNavbar ? "nav_sticky" : "nav_header"}
        offset={-200}
        style={
          mobileSize
            ? {
                display: "flex",
                width: "100%",
              }
            : null
        }
      >
        {mobileSize ? navRow(navContents) : navCoulmn(navContents)}
      </Scrollspy>
    </>
  );
};

export default Navigation;
