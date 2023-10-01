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
            <div onClick={() => changePage('playbackSpeed')}>
                <SettingItem startIcon={<PlaybackSpeed />} content='Playback speed' >
                    <span>
                        normal
                    </span>
                    <IconWrapper>
                        <ArrowRight />
                    </IconWrapper>
                </SettingItem>
            </div>
            <div onClick={() => changePage('quality')}>
                <SettingItem startIcon={<ChangeQuality />} content='ChangeQuality'>
                    <span>
                        720
                    </span>
                    <IconWrapper>
                        <ArrowRight />
                    </IconWrapper>
                </SettingItem>
            </div>
        </SettingMenu>
    )
}

export default SettingList