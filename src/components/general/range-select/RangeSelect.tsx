import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { RangePropsType } from "../../../@types/RangeSelectType.model";


const RangeSelect = ({
  min,
  max,
  controllerRef,
  onChangeCallback,
  step,
  onRangeMove,
  onRangeEnd,
  onRangeStart
}: RangePropsType) => {


  useImperativeHandle(controllerRef, () => ({
    calcInputVal,
    toggleThumb
  }));

  const selectorRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [showThumb, setShowThumb] = useState<boolean>(false)
  const toggleThumb = (isShow: boolean) => {
    setShowThumb(pre => !pre)
  }

  const calcInputVal = useCallback((e: number, updateParent: boolean) => {
    if (updateParent && onChangeCallback)
      onChangeCallback(e)
    setCurrentValue(+e);
    if (selectorRef.current && progressBarRef.current) {
      selectorRef.current.style.left = `calc(${e}% - 9px)`;
      progressBarRef.current.style.width = `calc(${e}%)`;
    }
  }, []);

  const calcThrottle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    calcInputVal(+e.target.value, true)
  }, [])

  const TimeLineMemo = useMemo(() => {
    return <div className="timeline" />
  }, [])

  return (
    <div className="timeline-range">
      <input className="slider"
        type="range"
        step={step}
        min={min}
        max={max}
        value={currentValue}
        id="slider"
        onChange={(e) => calcThrottle(e)}
        onMouseMove={(e) => {
          onRangeMove?.(e);
        }}
        onTouchMove={(e) => {
          if (!onRangeMove) return;
          const rect = (e.target as any).getBoundingClientRect();
          (e as any).offsetX = e.touches[0].clientX - window.pageXOffset - rect.left;
          onRangeMove(e);
        }}
        onTouchStart={onRangeStart}
        onTouchEnd={onRangeEnd}
        onMouseDown={onRangeStart}
        onMouseUp={onRangeEnd}
      />
      <div id="progressBar" className="progress-bar" ref={progressBarRef} />

      <div id="selector" className="thumb-bar" ref={selectorRef} />

      {TimeLineMemo}
    </div>
  );
};

export default RangeSelect;
