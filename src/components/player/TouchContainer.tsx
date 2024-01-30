import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import { throttle } from "lodash-es"
import { useFullscreen } from '../../hooks/useFullscreen'
import VideoPlayerContext from '../../contexts/VideoPlayerContext'
import { PlayerEventsType } from '../../@types/player.model'
import useContextEvents from '../../hooks/useContextEvents'

const TouchContainer = ({ children, onShow, canPlayOnClick }: { children: ReactNode, canPlayOnClick: boolean, onShow: (show: boolean) => void }) => {
    const isPlay = useRef<boolean>()
    const isShow = useRef<boolean>()
    const isSettingOpen = useRef<boolean>()
    const timeOutRef = useRef<NodeJS.Timeout | undefined>()
    const { listen } =
        useContextEvents<PlayerEventsType>(VideoPlayerContext);
    useEffect(() => {
        listen({
            onChangeSetting: (e) => {
                isSettingOpen.current = e
            }
        })
    }, [])

    const video_wrapper_id = document.getElementById("video_wrapper_id");
    const video_player = document.getElementById("video_player");

    const { toggleFullscreen } = useFullscreen((e) => {
    }, video_wrapper_id, video_player);

    // const togglePlay = () => {
    //     if (canPlayOnClick)
    //         changePlayPause(!isPlay.current)
    //     else
    //         hideWithDelay()
    // }

    const { timeForHideEl, changePlayPause, increaseTime, decreaseTime, keyControl } = usePlayerContext({
        onPlayPause: (playStatus: boolean) => {
            isPlay.current = playStatus
            hideWithDelay()
        }
    })

    const showHandler = (show: boolean) => {
        if (show !== isShow.current) {
            isShow.current = show;
            onShow(show)
        }
    }

    const hideWithDelay = () => {
        showHandler(true)
        if (!isPlay.current)
            return
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
        timeOutRef.current = setTimeout(() => {
            if (isPlay.current && !isSettingOpen.current) {
                showHandler(false)
            }
        }, 5000)

    };
    useEffect(() => {

        if (!keyControl) return
        const handelKeyDown = (e: KeyboardEvent) => {
            if (e.keyCode === 39) increaseTime(10)
            if (e.keyCode === 37) decreaseTime(10)
            if (e.keyCode === 32 && isPlay.current !== undefined) changePlayPause(!isPlay.current)
        };

        window.addEventListener("keydown", handelKeyDown);
        window.addEventListener("mousedown", hideWithDelay);
        window.addEventListener("touchstart ", hideWithDelay);

        return () => {
            window.removeEventListener("keydown", handelKeyDown);
            window.removeEventListener("mousedown", hideWithDelay);
            window.removeEventListener("touchstart", hideWithDelay);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const calcThrottle = hideWithDelay
    return (
        <div
            id='touchkontanier'
            // onDoubleClick={toggleFullscreen}
            // onClick={togglePlay}
            onMouseMove={calcThrottle}
            onTouchStart={calcThrottle}
            onMouseDown={calcThrottle}
            onTouchMove={calcThrottle}
            style={{ width: '100%', height: '100%' }}>
            {children}
        </div>
    )
}

export default TouchContainer