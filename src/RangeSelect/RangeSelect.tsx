import React, { useEffect, useState } from "react";
import { RangePropsType } from "./RangeSelectType.model";
import styled from "@emotion/styled";

const GeneralStyleForRange = styled.div({
  position: "relative",
  height: "30%",
  width: "100%",
})

const ProgressBar = styled.div({
  width: '0%',
  height: '3px',
  background: '#f00',
  borderRadius: '3px',
  position: 'absolute',
  top: '50%',
  marginTop: '-4px',
  left: '0',
  zIndex: '3',
})

const Thumb = styled.div({
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
  marginLeft: '4px',
})

const TimeLine = styled.div({
  width: "100%",
  height: "3px",
  background: "#ffffff",
  borderRadius: "3px",
  position: "absolute",
  top: "50%",
  marginTop: "-4px",
  left: "0",
  zIndex: "1"
})

const Slider = styled.input({
  width: '100%',
  '-webkit-appearance': 'none',
  zIndex: '5',
  position: 'absolute',
  inset: '0',
  opacity: '0',
  '::-webkit-slider-thumb': {
    '-webkit-appearance': 'none',
    appearance: 'none',
    width: '6px',
    height: '17px',
    background: 'rgba(0, 188, 212, 1)',
  }
})

const RangeSelect = (props: RangePropsType) => {

  let selector = document.getElementById("selector") as HTMLElement;
  let progressBar = document.getElementById("progressBar") as HTMLElement;
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    setCurrentValue(props.value);
    if (!selector && !progressBar) return;
    selector.style.left = `calc(${props.value}% - 9px)`;
    progressBar.style.width = `calc(${props.value}%)`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  const calcInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.inputChangeValue(e.target.value);
    setCurrentValue(+e.target.value);
    if (!selector && !progressBar) return;
    selector.style.left = `calc(${e.target.value}% - 9px)`;
    progressBar.style.width = `calc(${e.target.value}%)`;
  };

  return (
    <GeneralStyleForRange>
      <Slider
        type="range"
        step=".01"
        min={props.min}
        max={props.max}
        value={currentValue}
        id="slider"
        onChange={(e) => calcInputVal(e)}
      // onMouseMove={(e) => {
      //   props.onMouseMove(e);
      // }}
      // onTouchMove={(e) => {
      //   props.onTouchMove(e);
      // }}
      // onMouseEnter={() => {
      //   if (!props.onMouseEnter) return;
      //   props.onMouseEnter();
      // }}
      // onMouseLeave={() => {
      //   if (!props.onMouseLeave) return;
      //   props.onMouseLeave();
      // }}
      />

      <ProgressBar id="progressBar" />
      <Thumb id="selector" />
      <TimeLine className="timeline" />
    </GeneralStyleForRange>
  );
};

export default RangeSelect;
