import styled from "@emotion/styled";

export const ModalOverlay = styled.div({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  overflowY: "hidden",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: "11",
});

export const ModalContent = styled.div({
  position: "relative",
  backgroundColor: "#fff",
  border: "1px solid rgba(0,0,0,0.3)",
  backgroundClip: "padding-box",
  borderRadius: "0.3rem",
  padding: "1rem",
});

export const ModalWrapper = styled.div({
  maxWidth: "500px",
  margin: "2rem auto",
  zIndex: 20,
  position: 'relative'
});
