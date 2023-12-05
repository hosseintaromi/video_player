import Video from './player/Video'
import SettingMenu from '../components/setting/Setting'
import Play from './player/Play'
import TimeLine from './RangeSelect/MediaTimeLine/MediaTimeLine'
import { ThemeProvider } from '@emotion/react'
import { useStyle } from '../hooks/useStyle'
import { Button, PlayIconWrapper, VideoWrapper } from './player/VideoPlayerStyle'
import { usePlayerContext } from '../hooks/usePlayerContext'
import { useCallback, useEffect, useRef, useState } from 'react'
import { throttle } from "lodash-es"
import Icon from './Icons/Icon'
import Toolbar from './Toolbar/Toolbar'
import React from 'react'

type TimerType = ReturnType<typeof setTimeout> | null;


const PlayerTemplate = () => {
    const { style } = useStyle()
    const { setVideoRef } = usePlayerContext()
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isFadeOut, setIsFadeOut] = useState<boolean>(true);
    const [showAnimationForPlayButton, setShowAnimationForPlayButton] = useState(true)
    const setTimeOutUiRef = useRef<TimerType>(null)



    const setTimeForUi = () => {
        if (isFadeOut)
            setIsFadeOut(false);
        if (setTimeOutUiRef.current)
            clearTimeout(setTimeOutUiRef.current);
        setTimeOutUiRef.current = setTimeout(() => {
            if (!videoRef?.current?.paused) {
                setIsFadeOut(true);
            }
        }, 3000);
    };
    const calcThrottle = useCallback(throttle(setTimeForUi, 200), [])

    useEffect(() => {
        setVideoRef?.(videoRef.current!)
    }, [])
    return (
        <ThemeProvider theme={style}>
            <VideoWrapper id="video_wrapper_id" onMouseMove={calcThrottle}>
                <PlayIconWrapper>

                    <Button animation={showAnimationForPlayButton}>
                        <Icon type='play' />
                    </Button>
                    {/* <Button animation={showAnimationForPlayButton}>
                        {playState ? playIcon : pauseIcon}
                    </Button> */}
                </PlayIconWrapper>
                <Video />
                <Toolbar />
            </VideoWrapper>
        </ThemeProvider>
    )
}

export default PlayerTemplate