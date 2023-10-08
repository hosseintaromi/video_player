import React, { RefObject, useEffect, useState } from 'react'
import SettingItem from './SettingItem';
import { IconWrapper, SettingMenu } from '../General/FlexCenter';
import CheckMark from '../assets/Icons/CheckMark';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';

type settingPlaybackSpeedPropsType = {
    changePage: (newPageName: pageName, dir: pageDir) => void, speedList: number[],
    videoRef: RefObject<HTMLVideoElement>,
    myRef: React.RefObject<HTMLDivElement>
}

const SettingPlaybackSpeed = ({ changePage, speedList, videoRef, myRef }: settingPlaybackSpeedPropsType) => {
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
            <SettingMenu myRef={myRef}>
                <>
                    <SettingHeader
                        title="speed"
                        hasBackButton={true}
                        hasCustomButton={false}
                        changePage={changePage}
                        backRoute={pageName.settingList}
                    />
                    {speedList && speedList.map((speedItem, index) =>
                        <div key={index} onClick={() => changeVideoSpeed(speedItem)}>
                            <SettingItem
                                key={index}
                                startIcon={currentSpeed === speedItem ? <CheckMark /> : <IconWrapper><></></IconWrapper>}
                                content={speedItem} />
                        </div>
                    )}
                </>
            </SettingMenu>
        </>
    )
}

export default SettingPlaybackSpeed