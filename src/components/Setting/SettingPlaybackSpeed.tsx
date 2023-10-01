import styled from '@emotion/styled';
import React from 'react'
import SettingItem from './SettingItem';
import PlaybackSpeed from '../assets/Icons/PlaybackSpeed';
import { IconWrapper, SettingMenu } from '../General/FlexCenter';
import ArrowRight from '../assets/Icons/ArrowRight';
import ChangeQuality from '../assets/Icons/ChangeQuality';


const SettingList = ({ changePage }: { changePage: (newPageName: string) => void }) => {
    return (
        <SettingMenu >
            <div onClick={() => changePage('settingList')}>
                <SettingItem startIcon={<PlaybackSpeed />} content='Playback speed111222' />
            </div>
            <div onClick={() => changePage('settingList')}>
                <SettingItem startIcon={<ChangeQuality />} content='ChangeQuality111222' />
            </div>
        </SettingMenu>
    )
}

export default SettingList