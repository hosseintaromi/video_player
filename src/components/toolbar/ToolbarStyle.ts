import styled from "@emotion/styled";

export const ToolbarWrapper = styled.div({
  position: "absolute",
  zIndex: "100",
  bottom: "0",
  left: "0.75rem",
  right: "0.75rem",
},
  ({ opacity }: { opacity: boolean }) => ({ opacity: opacity ? 0 : 1 }));

export const SettingRightSection = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px"
});

export const SettingLeftSection = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px"
});

export const SettingItemWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "10px"
});

export const TimeCounter = styled.span(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  color: `${theme.iconColor}99`
}));

export const VolumeWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
},
  ({ gap }: { gap: boolean }) => ({ gap: gap ? "10px" : "0" }));
