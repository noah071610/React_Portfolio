import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Div = styled.div`
  padding: 1rem 1rem 2rem 1rem;
`;

function Articles({ children, title, sub }) {
  return (
    <Div className="articles">
      <Title title={title} sub={sub} />
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>{children}</div>
    </Div>
  );
}

export default Articles;
