import React, { useState } from 'react';
import SettingIcon from "../assets/Icons/SettingIcon";
import Overlay from './Overlay';
import SettingList from './SettingList';
import SettingPlaybackSpeed from './SettingPlaybackSpeed';
import SettingQuality from './SettingQuality';

type settingPropsType = {
    speedList: number[]
    videoRef: React.RefObject<HTMLVideoElement>

}

const Setting = (props: settingPropsType) => {
    const [settingPage, setSettingPage] = useState('settingList');
    const handelSettingPage = () => {
        switch (settingPage) {
            case 'settingList':
                return <SettingList changePage={changePage} />
            case 'playbackSpeed':
                return <SettingPlaybackSpeed changePage={changePage} speedList={props.speedList} videoRef={props.videoRef} />
            case 'quality':
                return <SettingQuality changePage={changePage} />
            default:
                return <SettingList changePage={changePage} />
        }
    }
    const changePage = (newPageName: string) => {
        setSettingPage(newPageName)
    }
    return (
        <>
            <Overlay>
                <div data-toggler>
                    <SettingIcon />
                </div>
                <div data-content>
                    {handelSettingPage()}
                </div>
            </Overlay>
        </>
    )
}

export default Setting