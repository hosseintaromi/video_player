import React, { ReactNode, useState } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'

const Play = ({ children }: { children?: ReactNode }) => {
    const [play, setPlay] = useState<boolean>(false)

    const togglePlay = () => {
        changePlayPause(!play)
    }

    const { changePlayPause } = usePlayerContext({
        onPlayPause: (play: boolean) => {
            setPlay(play)
        },
        onLoading: (isLoading: boolean) => {
            console.log("isLoading: ", isLoading);
        }
    })

    return (
        <div >
            <button onClick={togglePlay}> {play ? 'pause' : 'play'}</button>
            {children}
        </div>
    )
}

export default Play