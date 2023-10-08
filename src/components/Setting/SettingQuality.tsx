import styled from '@emotion/styled';
import React from 'react'
import SettingItem from './SettingItem';
import PlaybackSpeed from '../assets/Icons/PlaybackSpeed';
import { IconWrapper, SettingMenu } from '../General/FlexCenter';
import ArrowRight from '../assets/Icons/ArrowRight';
import ChangeQuality from '../assets/Icons/ChangeQuality';
import { pageDir, pageName } from './Setting';


const SettingList = ({ changePage, myRef }: { changePage: (newPageName: pageName, dir: string) => void, myRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <SettingMenu myRef={myRef}>
            <div onClick={() => changePage(pageName.settingList, pageDir.forward)}>
                <SettingItem startIcon={<PlaybackSpeed />} content='Playback speed111' />
            </div>
            <div onClick={() => changePage(pageName.settingList, pageDir.forward)}>
                <SettingItem startIcon={<ChangeQuality />} content='ChangeQuality111' />
            </div>
        </SettingMenu>
    )
}

export default SettingList