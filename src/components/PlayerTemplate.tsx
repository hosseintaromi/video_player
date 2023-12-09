import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { throttle } from "lodash-es"
import Video from './player/Video'
import { useStyle } from '../hooks/useStyle'
import { Button, PlayIconWrapper, VideoWrapper } from './player/VideoPlayerStyle'
import { usePlayerContext } from '../hooks/usePlayerContext'
import Icon from './Icons/Icon'
import Toolbar from './Toolbar/Toolbar'

type TimerType = ReturnType<typeof setTimeout> | null;


const PlayerTemplate = () => {
    const { style } = useStyle()
    const [isFadeOut, setIsFadeOut] = useState<boolean>();
    const [showAnimationForPlayButton, setShowAnimationForPlayButton] = useState(true)
    const setTimeOutUiRef = useRef<TimerType>(null)
    const [isPlay, setIsPlay] = useState<boolean>(false)
    const { changePlayPause, isAutoPlay, getHideTime } = usePlayerContext({
        onPlayPause: (e) => {
            setIsPlay(e)

        }
    })


    const togglePlay = () => {
        changePlayPause(!isPlay)
    }

    const changeAnimationForPlay = (value: boolean) => {
        setShowAnimationForPlayButton(false);
        setTimeout(() => {
            setShowAnimationForPlayButton(true);
        }, 400);
    }

    const setTimeForUi = () => {
        console.log(isPlay);
        const hideTime = getHideTime()
        if (isPlay === true)
            setIsFadeOut(false)
        if (setTimeOutUiRef.current)
            clearTimeout(setTimeOutUiRef.current);
        setTimeOutUiRef.current = setTimeout(() => {
            console.log(2, isPlay);
            if (isFadeOut === false && isPlay === true) {
                console.log(23, isPlay);
                setIsFadeOut(true)
            }
        }, hideTime);
    };

    const calcThrottle = useCallback(throttle(setTimeForUi, 200), [])


    useEffect(() => {
        if (isAutoPlay()) {
            setIsFadeOut(true)
        } else {
            setIsFadeOut(false)
        }
    }, [])

    return (
        <ThemeProvider theme={style}>

            <VideoWrapper id="video_wrapper_id" onTouchMove={setTimeForUi} onMouseMove={setTimeForUi}>
                <PlayIconWrapper>
                    <Button animation={showAnimationForPlayButton} onClick={togglePlay}>
                        {isPlay === true ? <Icon type='pause' /> : <Icon type='play' />}
                    </Button>
                </PlayIconWrapper>
                <Video />
                <div style={{ display: isFadeOut ? 'none' : 'block' }}>
                    <Toolbar />
                </div>


            </VideoWrapper>
        </ThemeProvider>
    )
}

export default PlayerTemplate