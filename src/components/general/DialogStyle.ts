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
  zIndex: "24",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ModalContent = styled.div({
});

export const ModalWrapper = styled.div(({ theme }) => ({
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
  color: "#0f0f0f",
  backgroundColor: "#fff",
  border:" none",
  minWidth: "250px",
  maxWidth: "356px",
  maxHeight: "100%",
  direction: theme.dir
}));

export const DialogTitle = styled.div(({ theme }) => ({
  marginBottom: "14px",
  fontSize: "1.25rem",
  overflow: "hidden",
  lineHeight: "1.25",
  textOverflow: "ellipsis",
  fontWeight: "normal",
}));

export const DialogLabel = styled.label(({ theme }) => ({
  fontSize: theme.settingFontSize,
}));
