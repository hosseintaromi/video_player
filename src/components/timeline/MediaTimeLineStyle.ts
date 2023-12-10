import styled from "@emotion/styled";

export const ThumbCursor = styled.div({
  position: "absolute",
  width: "4px",
  height: "4px",
  background: "rgba(33, 33, 33, 0.6)",
  bottom: "53px",
  zIndex: "3",
  display: "none",
});
export const GeneralStyleForRange = styled.div({
  position: "relative",
  height: "23px",
  width: "100%",
  marginTop: "6px",
});
export const BufferSize = styled.div({
  width: "0%",
  height: "8px",
  background: "rgba(165, 165, 165, 1)",
  borderRadius: "3px",
  position: "absolute",
  top: "50%",
  marginTop: "-4px",
  left: "0",
  zIndex: "2",
});
export const Bubble = styled.output({
  color: "white",
  padding: "4px",
  position: "absolute",
  background: "rgba(33, 33, 33, 0.6)",
  borderRadius: "8px",
  left: "0%",
  zIndex: "5",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  bottom: "70px;",
  display: "none",

  span: {
    marginTop: "3px",
  },

  img: {
    width: "158px",
    height: "88px",
  },

  ":after": {
    content: '""',
    position: "absolute",
    width: "0px",
    height: "0px",
    background: "rgba(33, 33, 33, 0.6)",
    bottom: "-105px",
    left: "50%",
  },
});
