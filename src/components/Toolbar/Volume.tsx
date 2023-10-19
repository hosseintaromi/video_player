import React, { memo, useCallback, useState } from 'react'
import { IconWrapper } from '../General/FlexCenter';
import HighVolume from '../Icons/HighVolume';
import LowVolume from '../Icons/LowVolume';
import MuteVolume from '../Icons/MuteVolume';
import { useVideoRefContext } from '../../contexts/VideoContext';
import RangeSelect from '../RangeSelect/RangeSelect';
import { VolumeWrapper } from './ToolbarStyle';

const Volume = memo(() => {
    const [volume, setVolume] = useState<number>(0);
    const { videoRef } = useVideoRefContext()

    const changeVolume = useCallback((e: number) => {
        e = e / 100;
        console.log(e)
        if (!videoRef.current) return
        setVolume(e)
        videoRef.current.volume = e
    }, [])
    const calcVolumeIcon = () => {
        if (volume >= 0.66)
            return (
                <IconWrapper onClick={() => changeVolume(0)} >
                    <HighVolume />
                </IconWrapper>
            )
        else if (volume < 0.66 && volume >= 0.1)
            return (
                <IconWrapper onClick={() => changeVolume(0)} >
                    <LowVolume />
                </IconWrapper>)
        else if (volume >= 0)
            return (
                <IconWrapper onClick={() => changeVolume(1)} >
                    <MuteVolume />
                </IconWrapper>
            )
    }
    return (
        <VolumeWrapper>
            {calcVolumeIcon()}

            <div style={{ padding: '0 10px', width: '100px' }}>
                <RangeSelect step={1} value={volume} min={0} max={100} onChangeCallback={changeVolume} />
            </div>
        </VolumeWrapper>
    )
})

export default Volume