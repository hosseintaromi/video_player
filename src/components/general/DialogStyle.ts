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
    boxShadow: "0 0 24px 12px rgba(0,0,0,0.25)",
    borderRadius: "12px",
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    margin: "0 auto",
    overflowX: "hidden",
    overflowY: "auto",
    fontSize: "1.3rem",
    color: "#0f0f0f",
    backgroundColor: "#fff",
    border:" none",
    minWidth: "250px",
    maxWidth: "356px",
    maxHeight: "100%",
});

export const ModalWrapper = styled.div({
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
});
