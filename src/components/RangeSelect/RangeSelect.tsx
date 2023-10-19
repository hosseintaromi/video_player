import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { RangePropsType } from "./RangeSelectType.model";
import { GeneralStyleForRange, ProgressBar, Slider, Thumb, TimeLine } from "./RangeSelectStyle";
import { throttle } from "lodash-es"


const RangeSelect = ({
  value,
  min,
  max,
  controllerRef,
  onChangeCallback,
  step
}: RangePropsType) => {


  useImperativeHandle(controllerRef, () => ({
    calcInputVal
  }));

  const selectorRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [currentValue, setCurrentValue] = useState<number>(0);


  const calcInputVal = useCallback((e: number, updateParent: boolean) => {
    if (updateParent && onChangeCallback)
      onChangeCallback(e)
    setCurrentValue(+e);
    if (selectorRef.current && progressBarRef.current) {
      selectorRef.current.style.left = `calc(${e}% - 9px)`;
      progressBarRef.current.style.width = `calc(${e}%)`;
    }
  }, []);

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
        step={step}
        min={min}
        max={max}
        value={currentValue}
        id="slider"
        onChange={(e) => calcThrottle(e)}
      />
      <ProgressBar id="progressBar" ref={progressBarRef} />
      <Thumb id="selector" ref={selectorRef} />
      {TimeLineMemo}
    </GeneralStyleForRange>
  );
};

export default RangeSelect;
