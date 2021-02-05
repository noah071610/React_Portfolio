export const SquareLeft = () => (
  <div
    style={{
      position: "absolute",
      width: "150px",
      height: "150px",
      top: "10px",
      left: "-140px",
      transform: "rotateZ(45deg)",
      backgroundColor: "#5AE4A8",
      border: "none",
      zIndex: "-1",
    }}
  ></div>
);

export const SquareRight = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        right: "-140px",
        bottom: "0",
        transform: "rotateZ(45deg)",
        backgroundColor: "#D5F7E6",
        zIndex: "-1",
      }}
    ></div>
  );
};

export const SquareBottom = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        left: "-150px",
        bottom: "-150px",
        transform: "rotateZ(45deg)",
        backgroundColor: "#D5F7E6",
        zIndex: "-1",
      }}
    ></div>
  );
};
