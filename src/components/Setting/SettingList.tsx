import styled from '@emotion/styled';
import React from 'react'
import SettingItem from './SettingItem';
import PlaybackSpeed from '../assets/Icons/PlaybackSpeed';
import { IconWrapper } from '../General/FlexCenter';
import ArrowRight from '../assets/Icons/ArrowRight';
import ChangeQuality from '../assets/Icons/ChangeQuality';

const SettingMenu = styled.div({
    backgroundColor: 'rgb(40 40 39 / 60%)',
    fontSize: '15px',
    width: '300px',
    transform: 'translateX(-35%)',
    borderRadius: '',
});
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
            <div onClick={() => changePage('ChangeQuality')}>
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