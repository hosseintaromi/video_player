import { memo, useRef, useState } from 'react'
import RangeSelect from '../general/range-select/RangeSelect';
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
                <Icon isClickable={true} type='mute' onClick={() => mute()} />
            )
        } else {
            if (volume >= 66)
                return (
                    <Icon isClickable={true} type='volumeUp' onClick={() => mute()} />
                )
            else if (volume < 66 && volume >= 1)
                return (
                    <Icon isClickable={true} type='volumeDown' onClick={() => mute()} />
                )
        }

    }
    ({ gap }: { gap: boolean }) => ({ gap: gap ? "10px" : "0" })
    return (
        <div className='volume-wrapper' style={{ gap: volumeVisibility ? "10px" : "0" }}
            onMouseEnter={() => setVolumeVisibility(true)}
            onMouseLeave={() => setVolumeVisibility(false)}>
            {calcVolumeIcon()}
            <div style={{
                opacity: volumeVisibility ? 1 : 0,
                width: volumeVisibility ? '80px' : '0',
                marginRight: volumeVisibility ? '22px !important' : '0 !important'
            }}>
                <RangeSelect
                    step={1}
                    min={0}
                    max={100}
                    controllerRef={controllerRef}
                    onChangeCallback={changeVol}
                />
            </div>
        </div>
    )
})

export default Volume