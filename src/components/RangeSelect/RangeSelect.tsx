import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { RangePropsType } from "./RangeSelectType.model";
import { GeneralStyleForRange, ProgressBar, Slider, Thumb, TimeLine } from "./RangeSelectStyle";
import { throttle } from "lodash-es"
import { useVideoRefContext } from "../../contexts/VideoContext";


const RangeSelect = (props: RangePropsType) => {

  useImperativeHandle(props.controllerRef, () => ({
    calcInputVal
  }));
  const { videoRef } = useVideoRefContext()

  const selectorRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [currentValue, setCurrentValue] = useState<number>(0);


  const calcInputVal = (e: number, updateParent: boolean) => {
    if (!videoRef.current) return;
    if (updateParent)
      videoRef.current.currentTime =
        (e * videoRef.current.duration) / 100;
    setCurrentValue(+e);
    if (selectorRef.current && progressBarRef.current) {
      selectorRef.current.style.left = `calc(${e}% - 9px)`;
      progressBarRef.current.style.width = `calc(${e}%)`;
    }
  };

  const calcThrottle = useCallback(throttle((e: React.ChangeEvent<HTMLInputElement>) => {
    calcInputVal(+e.target.value, true)
  }, 20), [])

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
