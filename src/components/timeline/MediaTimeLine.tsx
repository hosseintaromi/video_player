import React, { useCallback, useRef } from "react";
import RangeSelect from "../general/range-select/RangeSelect"
import { usePlayerContext } from "../../hooks/usePlayerContext";
import { OnUpdateTimeType } from "../../@types/player.model";
import { Bubble, BufferSize, GeneralStyleForRange, ThumbCursor } from "./MediaTimeLineStyle"

type ChangeRangeSelectType = {
    calcInputVal: (e: number, updateParent: boolean) => void
};

const TimeLine = () => {
    const controllerRef = useRef<ChangeRangeSelectType>({
        calcInputVal: () => { }
    });

    const snapShotBoxCursor = useRef<HTMLDivElement>(null);
    const snapShotBox = useRef<HTMLOutputElement>(null);

    var duration = 0;
    var percentage = 0
    var timeOut: ReturnType<typeof setTimeout>;


    const { changeTime } = usePlayerContext({
        onUpdateTime: (e: OnUpdateTimeType) => {
            duration = e.duration
            percentage = e.percentage;
            controllerRef.current.calcInputVal(percentage, false)
        },
        onUpdateBuffer: (e: number) => {
            const buffer_size = document.getElementById("buffer-size");
            if (buffer_size)
                buffer_size.style.width = `${JSON.stringify(Math.round(e))}%`
        }
    })

    const rangeSelectChangeVideoTime = useCallback((e: number) => {
        changeTime((e * duration) / 100)
    }, [])


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
        if (!event.target) return;

        const bubbleEl = snapShotBox.current;
        const bubbleCursorEl = snapShotBoxCursor.current;
        if (!bubbleEl || !bubbleCursorEl || !duration) return;
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
    };

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
        <GeneralStyleForRange className="media-timeLine" onMouseEnter={() => {
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
                max={100}
                min={0}
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
            <BufferSize id="buffer-size" />
        </GeneralStyleForRange>
    )
}

export default TimeLine