import React, { RefObject, useEffect, useState } from 'react'
import SettingItem from './SettingItem';
import PlaybackSpeed from '../assets/Icons/PlaybackSpeed';
import { IconWrapper, SettingMenu } from '../General/FlexCenter';
import SettingHeader from './SettingHeader';
import CheckMark from '../assets/Icons/CheckMark';

type settingPlaybackSpeedPropsType = { changePage: (newPageName: string) => void, speedList: number[], videoRef: RefObject<HTMLVideoElement> }

const SettingPlaybackSpeed = ({ changePage, speedList, videoRef }: settingPlaybackSpeedPropsType) => {
    const changeVideoSpeed = (newSpeed: number) => {
        if (!videoRef?.current?.playbackRate) return
        videoRef.current.playbackRate = newSpeed;
        setCurrentSpeed(newSpeed)
    }
    const [currentSpeed, setCurrentSpeed] = useState(1)
    useEffect(() => {
        setCurrentSpeed(videoRef?.current?.playbackRate ? videoRef?.current?.playbackRate : 1)
    }, [])
    return (
        <>
            <SettingHeader title="speed" hasBackButton={true} hasCustomButton={false} changePage={changePage} />
            <SettingMenu >
                {speedList && speedList.map((speedItem, index) =>
                    <div onClick={() => changeVideoSpeed(speedItem)}>
                        <SettingItem
                            key={index}
                            startIcon={currentSpeed === speedItem ? <CheckMark /> : <IconWrapper><></></IconWrapper>}
                            content={speedItem} />
                    </div>
                )}

            </SettingMenu>
        </>
    )
}

export default SettingPlaybackSpeed