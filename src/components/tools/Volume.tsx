import { memo, useRef, useState } from 'react'
import RangeSelect from '../general/range-select/RangeSelect';
import { VolumeWrapper } from '../toolbar/ToolbarStyle';
import Icon from '../icons/Icon';
import { usePlayerContext } from '../../hooks/usePlayerContext';
import React from 'react';

type ChangeRangeSelectType = {
    calcInputVal: (e: number, updateParent: boolean) => void
};

const Volume = memo(() => {
    const { changeVolume, changeMute } = usePlayerContext({
        onChangeVolume: (e) => {
            setVolume(e * 100)
        },
        onChangeMute: (e) => {
            setIsMuted(e)
        }
    })
    const [volume, setVolume] = useState<number>(100);
    const [isMute, setIsMuted] = useState<boolean>(true)
    const [volumeVisibility, setVolumeVisibility] = useState<boolean>(false);
    const controllerRef = useRef<ChangeRangeSelectType>({
        calcInputVal: () => { }
    });

    const mute = () => {
        changeMute(!isMute)
        !isMute ? controllerRef.current.calcInputVal(0, false) : controllerRef.current.calcInputVal(volume, false)

    }

    const changeVol = (e: number) => {
        changeVolume(e / 100)
    }

    const calcVolumeIcon = () => {
        if (volume <= 1 || isMute) {
            return (
                <Icon type='mute' onClick={() => mute()} />
            )
        } else {
            if (volume >= 66)
                return (
                    <Icon type='volumeUp' onClick={() => mute()} />
                )
            else if (volume < 66 && volume >= 1)
                return (
                    <Icon type='volumeDown' onClick={() => mute()} />
                )
        }

    }
    return (
        <VolumeWrapper
            onMouseEnter={() => setVolumeVisibility(true)}
            onMouseLeave={() => setVolumeVisibility(false)}>
            {calcVolumeIcon()}
            <div
                style={{
                    padding: '0 15px',
                    width: volumeVisibility ? '60px' : "0",
                    opacity: volumeVisibility ? '1' : "0",
                    transition: 'all 0.3s ease 0s',
                }}>
                <RangeSelect
                    step={1}
                    min={0}
                    max={100}
                    controllerRef={controllerRef}
                    onChangeCallback={changeVol}
                />
            </div>
        </VolumeWrapper>
    )
})

export default Volume