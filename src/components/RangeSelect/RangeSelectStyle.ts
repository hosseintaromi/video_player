import styled from "@emotion/styled";

export const GeneralStyleForRange = styled.div({
  position: "relative",
  height: "23px",
  width: "100%",
  marginTop: "6px",
});

export const ProgressBar = styled.div({
  width: "0%",
  height: "3px",
  background: "#f00",
  borderRadius: "3px",
  position: "absolute",
  top: "50%",
  marginTop: "-4px",
  left: "0",
  zIndex: "3",
});

export const Thumb = styled.div({
  height: "12px",
  width: "12px",
  top: "22%",
  position: "absolute",
  left: "0%",
  backgroundColor: "#f00",
  border: "solid 3px #f00",
  borderRadius: "50%",
  zIndex: "4",
  marginTop: "-6px",
});

export const TimeLine = styled.div({
  width: "100%",
  height: "3px",
  background: "#ffffff",
  borderRadius: "3px",
  position: "absolute",
  top: "50%",
  marginTop: "-4px",
  left: "0",
  zIndex: "1",
});

export const Slider = styled.input({
  width: "100%",
  "-webkit-appearance": "none",
  zIndex: "5",
  position: "absolute",
  inset: "0",
  opacity: "0",
  "::-webkit-slider-thumb": {
    "-webkit-appearance": "none",
    appearance: "none",
    width: "6px",
    height: "17px",
    background: "rgba(0, 188, 212, 1)",
  },
});
