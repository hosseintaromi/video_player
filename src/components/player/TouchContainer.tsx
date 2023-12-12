import React, { ReactNode, useCallback, useRef, useState } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import { throttle } from "lodash-es"
import { useFullscreen } from '../../hooks/useFullscreen'

const TouchContainer = ({ children, onShow }: { children: ReactNode, onShow: (show: boolean) => void }) => {
    const isPlay = useRef<boolean>()
    const isShow = useRef<boolean>()
    const timeOutRef = useRef<NodeJS.Timeout | undefined>()


    const video_wrapper_id = document.getElementById("video_wrapper_id");
    const video_player = document.getElementById("video_player");

    const { toggleFullscreen } = useFullscreen((e) => {
        (window.screen.orientation as any)?.lock("landscape-primary");
    }, video_wrapper_id, video_player);

    const togglePlay = () => {
        changePlayPause(!isPlay.current)
    }

    const { getHideTime, changePlayPause } = usePlayerContext({
        onPlayPause: (playStatus: boolean) => {
            console.log('first', playStatus)
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
        const setting_menu = document.getElementById("setting-menu");
        if (!isPlay.current)
            return
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
            timeOutRef.current = undefined
        }
        showHandler(true)
        timeOutRef.current = setTimeout(() => {
            if (isPlay.current && !setting_menu) {
                showHandler(false)
            }
        }, getHideTime())

    };

    const calcThrottle = useCallback(throttle(hideWithDelay, 200), [])
    return (
        <div
            onDoubleClick={toggleFullscreen}
            onClick={togglePlay}
            onMouseMove={calcThrottle}
            onTouchEnd={calcThrottle}
            onTouchMove={calcThrottle}
            style={{ width: '100%', height: '100%' }}>
            {children}
        </div>
    )
}

export default TouchContainer