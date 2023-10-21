import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { IconWrapper } from '../General/FlexCenter';
import HighVolume from '../Icons/HighVolume';
import LowVolume from '../Icons/LowVolume';
import MuteVolume from '../Icons/MuteVolume';
import { useVideoRefContext } from '../../contexts/VideoContext';
import RangeSelect from '../RangeSelect/RangeSelect';
import { VolumeWrapper } from './ToolbarStyle';

type ChangeRangeSelectType = {
    calcInputVal: (e: number, updateParent: boolean) => void
};

const Volume = memo(() => {
    const [volume, setVolume] = useState<number>(100);
    const [volumeVisibility, setVolumeVisibility] = useState<boolean>(false);
    const { videoRef } = useVideoRefContext()
    const controllerRef2 = useRef<ChangeRangeSelectType>({
        calcInputVal: () => { }
    });
    useEffect(() => {
        changeVolume(100)
        controllerRef2.current.calcInputVal(100, false);

    }, [])

    const changeVolume = useCallback((e: number) => {
        setVolume(e)
        e = e / 100;
        if (!videoRef.current) return
        videoRef.current.volume = e
    }, [])
    const calcVolumeIcon = () => {
        if (volume >= 66)
            return (
                <IconWrapper onClick={() => changeVolume(0)} >
                    <HighVolume />
                </IconWrapper>
            )
        else if (volume < 66 && volume >= 1)
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
        <VolumeWrapper
            onMouseEnter={() => setVolumeVisibility(true)}
            onMouseLeave={() => setVolumeVisibility(false)}>
            {calcVolumeIcon()}


            <div style={{ padding: '0 15px', width: volumeVisibility ? '60px' : "0", opacity: volumeVisibility ? '1' : "0", transition: 'all 0.3s ease 0s' }}>
                <RangeSelect
                    step={1}
                    value={volume}
                    min={0}
                    max={100}
                    controllerRef={controllerRef2}
                    onChangeCallback={changeVolume}
                />
            </div>


        </VolumeWrapper>
    )
})

export default Volume