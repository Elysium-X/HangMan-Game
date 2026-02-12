const Head = (
  <div
    style={{
      height: "50px",
      width: "50px",
      background: "white",
      borderRadius: "50%",
      border: "10px solid blue",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);
const Body = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "white",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
);

const Right_Arm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "white",
      position: "absolute",
      top: "150px",
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: "left bottom",
    }}
  />
);

const Left_Arm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "white",
      position: "absolute",
      top: "150px",
      right: '10px',
      rotate: '30deg',
      transformOrigin: "right bottom",
    }}
  />
);

const Right_Leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "white",
      position: "absolute",
      top: "210px",
      right: '-90px',
      rotate: '60deg',
      transformOrigin: "left bottom",
    }}
  />
);

const Left_Leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "white",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: '-60deg',
      transformOrigin: "right bottom",
    }}
  />
);

const Body_Parts = [Head,Body,Right_Arm,Left_Arm,Right_Leg,Left_Leg ]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {Body_Parts.slice(0,numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "white",
          position: "absolute",
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "white",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "white",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "white" }} />
    </div>
  );
}
