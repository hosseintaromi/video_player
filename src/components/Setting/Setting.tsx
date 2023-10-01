import React, { useState } from 'react';
import SettingIcon from "../assets/Icons/SettingIcon";
import Overlay from './Overlay';
import SettingList from './SettingList';
import SettingPlaybackSpeed from './SettingPlaybackSpeed';
import SettingQuality from './SettingQuality';

const Setting = () => {
    const [settingPage, setSettingPage] = useState('settingList');
    const handelSettingPage = () => {
        switch (settingPage) {
            case 'settingList':
                return <SettingList changePage={changePage} />
            case 'playbackSpeed':
                return <SettingPlaybackSpeed />
            case 'ChangeQuality':
                return <SettingQuality />
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