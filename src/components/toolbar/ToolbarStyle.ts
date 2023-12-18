import styled from "@emotion/styled";

export const ToolbarWrapper = styled.div(
  {
    position: "absolute",
    zIndex: "100",
    bottom: "0",
    left: "0.75rem",
    right: "0.75rem",
  },
  ({ isFaded }: { isFaded: boolean }) => ({ opacity: isFaded ? 0 : 1 })
);

export const SettingRightSection = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "18px",
});

export const SettingLeftSection = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "18px",
});

export const SettingItemWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "10px",
});

export const TimeDivider = styled.span(() => ({
  margin: "0 5px",
}));

export const TimeCounter = styled.span(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  color: `${theme.iconColor}99`,
  fontSize: theme.settingFontSize,
}));

export const VolumeWrapper = styled.div(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  ({ gap }: { gap: boolean }) => ({ gap: gap ? "18px" : "0" })
);

export const MobileToolbarWrapper = styled.div(
  {
    position: "absolute",
    zIndex: "100",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",

    ".media-timeLine": {
      position: "absolute",
      bottom: "16px",
      left: "32px",
      right: "32px",
      width: "auto",
    },
    ".setting-item-wrapper": {
      position: "absolute",
      bottom: "45px",
      left: "32px",
      right: "32px",
      width: "auto",
    },
  },
  ({ isFaded }: { isFaded: boolean }) => ({ opacity: isFaded ? 0 : 1 })
);
export const MobileSettingPlay = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
export const MobileTopToolbar = styled.div(({ theme }) => ({
  color: `${theme.iconColor}`,
  position: "absolute",
  right: "16px",
  top: "16px",
  display: "flex",
  alignItems: "center",
  ".setting": {
    marginLeft: "8px",
  },
}));
