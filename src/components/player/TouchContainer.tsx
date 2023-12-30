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
        (window.screen.orientation as any)?.lock("landscape-primary");
    }, video_wrapper_id, video_player);

    const togglePlay = () => {
        if (canPlayOnClick)
            changePlayPause(!isPlay.current)
        else
            hideWithDelay()
    }

    const { getHideTime, changePlayPause } = usePlayerContext({
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
        if (!isPlay.current)
            return
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
            timeOutRef.current = undefined
        }
        showHandler(true)
        timeOutRef.current = setTimeout(() => {
            if (isPlay.current && !isSettingOpen.current) {
                showHandler(false)
            }
        }, getHideTime())

    };
    useEffect(() => {
        console.log('afarin ?')
        const handelKeyDown = (e: KeyboardEvent) => {
            console.log(e.keyCode)

        };

        window.addEventListener("keydown", handelKeyDown);

        return () => {
            window.removeEventListener("keydown", handelKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const calcThrottle = useCallback(throttle(hideWithDelay, 200), [])
    return (
        <div
            id='slm'
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