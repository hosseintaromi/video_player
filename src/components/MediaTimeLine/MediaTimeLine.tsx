import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import RangeSelect from '../RangeSelect/RangeSelect'
import { useVideoRefContext } from '../../contexts/VideoContext';
import { Bubble, BufferSize, ThumbCursor } from './MediaTimeLineStyle'
type ChangeRangeSelectType = {
    calcInputVal: (e: number, updateParent: boolean) => void
};
const MediaTimeLine = () => {
    let timeOut: ReturnType<typeof setTimeout>;
    const { videoRef } = useVideoRefContext()
    const [videoSlider, setVideoSlider] = useState<number>(0);
    const [hoverPercent, setHoverPercent] = useState<number>();
    const [hoverValue, setHoverValue] = useState<number | string>();
    const snapShotBoxCursor = useRef<HTMLDivElement>(null);
    const snapShotBox = useRef<HTMLOutputElement>(null);
    const controllerRef = useRef<ChangeRangeSelectType>({
        calcInputVal: () => { }
    });

    useImperativeHandle(controllerRef, () => ({
        calcInputVal: controllerRef.current.calcInputVal,
        setVideoSlider,
        videoSlider
    }));

    const setBubble = (
        e: React.MouseEvent<HTMLInputElement, MouseEvent>,
        type: "touch" | "hover",
    ) => {
        const event: any = e.nativeEvent;
        var offsetX: number;
        if (type === "touch") {
            const rect = event.target.getBoundingClientRect();
            offsetX = event.touches[0].clientX - window.pageXOffset - rect.left;
        } else {
            offsetX = event.offsetX;
        }
        if (!event.target || !videoRef.current) return;

        setHoverPercent((offsetX / event.target.clientWidth) * 100);
        const bubbleEl = snapShotBox.current;
        const bubbleCursorEl = snapShotBoxCursor.current;
        if (!bubbleEl || !bubbleCursorEl || !videoRef.current.duration) return;
        const val = hoverPercent ? hoverPercent : 0;
        const halfBubbleWidth = bubbleEl.offsetWidth / 2;
        bubbleEl.style.left = `${Math.max(
            halfBubbleWidth,
            Math.min(offsetX, event.target.clientWidth - halfBubbleWidth),
        )}px `;
        bubbleEl.style.marginLeft = `-${65}px `;
        bubbleCursorEl.style.left = `${Math.max(
            13,
            Math.min(offsetX, event.target.clientWidth) + 13,
        )}px `;

        setHoverValue((val * videoRef.current.duration) / 100);
    };

    const rangeSelectChangeVideoTime = useCallback((e: number) => {
        if (!videoRef.current) return;
        videoRef.current.currentTime =
            (e * videoRef.current.duration) / 100;
    }, [])

    const changeShowBubble = (e: boolean) => {
        const bubbleEl = snapShotBox.current;
        const bubbleCursorEl = snapShotBoxCursor.current;

        if (!bubbleEl || !bubbleCursorEl) return;
        if (e) {
            bubbleEl.style.display = "flex";
            bubbleCursorEl.style.display = "flex";
        } else {
            bubbleCursorEl.style.display = "none";
            bubbleEl.style.display = "none";
        }
    };

    return (
        <div onMouseEnter={() => {
            changeShowBubble(true);
        }}
            onMouseLeave={() => {
                changeShowBubble(false);
            }}
            onTouchMove={() => {
                changeShowBubble(true);
                clearTimeout(timeOut);
                timeOut = setTimeout(() => {
                    changeShowBubble(false);
                }, 2000);
            }}>
            <RangeSelect
                value={videoSlider}
                min={0}
                max={100}
                step={1}
                controllerRef={controllerRef}
                onChangeCallback={rangeSelectChangeVideoTime}
                onMouseMove={(e: any) => {
                    setBubble(e, "hover");
                }}
                onTouchMove={(e: any) => {
                    setBubble(e, "touch");
                }}
            />
            <Bubble ref={snapShotBox} className="bubble">
                <img
                    src="https://static.namava.ir/Content/Upload/Images/a72becc0-c77b-4110-9b04-9206bc76858f.jpg"
                    alt=""
                />
            </Bubble>
            <ThumbCursor ref={snapShotBoxCursor} />
            <BufferSize id="bufferSize" />
        </div>
    )
}

export default MediaTimeLine