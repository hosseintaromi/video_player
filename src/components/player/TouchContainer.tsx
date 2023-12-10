import React, { ReactNode, useCallback, useRef } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import { throttle } from "lodash-es"

const TouchContainer = ({ children, onShow }: { children: ReactNode, onShow: (show: boolean) => void }) => {
    const isPlay = useRef<boolean>()
    const isShow = useRef<boolean>()
    const timeOutRef = useRef<NodeJS.Timeout | undefined>()

    const { getHideTime } = usePlayerContext({
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
            if (isPlay.current)
                showHandler(false)
        }, getHideTime())

    };

    const calcThrottle = useCallback(throttle(hideWithDelay, 200), [])
    return (
        <div
            onMouseMove={calcThrottle}
            onTouchEnd={calcThrottle}
            onTouchMove={calcThrottle}
            style={{ width: '100%', height: '100%' }}>
            {children}
        </div>
    )
}

export default TouchContainer