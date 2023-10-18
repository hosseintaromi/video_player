import React, { memo, useState } from 'react'
import { IconWrapper } from '../General/FlexCenter';
import HighVolume from '../Icons/HighVolume';
import LowVolume from '../Icons/LowVolume';
import MuteVolume from '../Icons/MuteVolume';
import { useVideoRefContext } from '../../contexts/VideoContext';

const Volume = memo(() => {
    const [volume, setVolume] = useState<number>(0);
    const { videoRef } = useVideoRefContext()

    const changeVolume = (e: number) => {
        if (!videoRef.current) return
        setVolume(e)
        videoRef.current.volume = e
        console.log(e)
    }
    const calcVolumeIcon = () => {
        if (volume > 0.66)
            return (
                <IconWrapper onClick={() => changeVolume(0)} >
                    <HighVolume />
                </IconWrapper>
            )
        else if (volume < 0.66 && volume > 0.1)
            return (
                <IconWrapper onClick={() => changeVolume(0)} >
                    <LowVolume />
                </IconWrapper>)
        else if (volume === 0)
            return (
                <IconWrapper onClick={() => changeVolume(1)} >
                    <MuteVolume />
                </IconWrapper>
            )
    }
    return (
        <span>
            {calcVolumeIcon()}
        </span>
    )
})

export default Volume