import React, { ReactNode, useState } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import { Button } from '../player/VideoPlayerStyle'
import Icon from '../icons/Icon'

const Play = ({ children }: { children?: ReactNode }) => {
    const [isPlay, setIsPlay] = useState<boolean>(false)

    const togglePlay = () => {
        changePlayPause(!isPlay)
    }



    const { changePlayPause } = usePlayerContext({
        onPlayPause: (play: boolean) => {
            setIsPlay(play)
        },
        onLoading: (isLoading: boolean) => {
            console.log("isLoading: ", isLoading);
        }
    })

    return (
        <>
            {
                isPlay === true ?
                    <Icon onClick={togglePlay} type='pause' />
                    :
                    <Icon onClick={togglePlay} type='play' />
            }
        </>
    )
}

export default Play