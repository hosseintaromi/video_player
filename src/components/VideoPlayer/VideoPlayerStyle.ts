/*
ui components
*/
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
type ButtonPropsType = {
  animation: boolean;
};

export const bounce = keyframes`
  from {
    opacity: 1
  }
  
  to {
    opacity: 0;
    -webkit-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2)
  }
  `;

export const VideoWrapper = styled.div(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",
  "> *": {
    boxSizing: "border-box",
  },
}));

export const Video = styled.video(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.videoBg,
}));

export const Button = styled.button<ButtonPropsType>((props) => ({
  background: "transparent",
  border: "none",
  borderRadius: "50%",
  color: "white",
  padding: "20px",
  animation: `${!props.animation ? `${bounce} 0.45s ease` : ""}`,
  transformOrigin: "center",
  display: `${props.animation ? "none" : "block"}`,
  "img,svg": {
    width: "50px",
    height: "50px",
  },
}));

export const PlayIconWrapper = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const TopRightWrapper = styled.div({
  zIndex: "1",
  top: "0",
  display: "flex",
  position: "absolute",
  height: "50%",
  width: "40%",
  right: "0",
  justifyContent: "right",
  color: "white",
});

export const TopLeftWrapper = styled.div({
  color: "white",
  zIndex: "1",
  top: "0",
  display: "flex",
  position: "absolute",
  height: "50%",
  width: "40%",
  left: "0",
  justifyContent: "left",
});

export const PlayWrapper = styled.div({
  zIndex: "2",
  position: "absolute",
  height: "calc(100% - 70px)",
  width: "100%",
});

export const ToolBarWrapper = styled.div({
  position: "absolute",
  bottom: "0",
  height: "20%",
  width: "100%",
  maxHeight: "70px",
  color: "#fff",
  fontSize: "25px",
  padding: "0 15px",
  zIndex: "2",

  background:
    "linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.6012780112044818) 78%)",
});

export const ToolBarPlayIcon = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
