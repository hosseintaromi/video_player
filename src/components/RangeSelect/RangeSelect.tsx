import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RangePropsType } from "./RangeSelectType.model";
import { GeneralStyleForRange, ProgressBar, Slider, Thumb, TimeLine } from "./RangeSelectStyle";
import { throttle } from "lodash-es"


const RangeSelect = (props: RangePropsType) => {

  const selectorRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [currentValue, setCurrentValue] = useState<number>(0);

  const calcInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.inputChangeValue(e.target.value);
    setCurrentValue(+e.target.value);
    if (selectorRef.current && progressBarRef.current) {
      selectorRef.current.style.left = `calc(${e.target.value}% - 9px)`;
      progressBarRef.current.style.width = `calc(${e.target.value}%)`;
    }
  };

  const calcThrottle = useCallback(throttle(calcInputVal, 20), [])

  const TimeLineMemo = useMemo(() => {
    return <TimeLine className="timeline" />
  }, [])

  return (
    <GeneralStyleForRange>
      <Slider
        type="range"
        step=".01"
        min={props.min}
        max={props.max}
        value={currentValue}
        id="slider"
        onChange={(e) => calcThrottle(e)}
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


      <ProgressBar id="progressBar" ref={progressBarRef} />
      <Thumb id="selector" ref={selectorRef} />
      {TimeLineMemo}
    </GeneralStyleForRange>
  );
};

export default RangeSelect;
