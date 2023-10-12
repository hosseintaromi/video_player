import React from 'react'
import SettingItem from './SettingItem';
import PlaybackSpeed from '../assets/Icons/PlaybackSpeed';
import { IconWrapper, SettingMenu } from '../General/FlexCenter';
import ArrowRight from '../assets/Icons/ArrowRight';
import ChangeQuality from '../assets/Icons/ChangeQuality';
import { pageDir, pageName } from './Setting';
import Subtitle from '../assets/Icons/Subtitle';
import AudioIcon from '../assets/Icons/AudioIcon';
import {
    useAudioTrackCurrent,
    useLevelCurrent,
    useSpeedCurrent,
    useSubtitleCurrent
} from '../../contexts/VideoContext';

type SettingListType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>
}

const SettingList = ({
    changePage,
    myRef,
}: SettingListType
) => {
    const { currentAudioTrack } = useAudioTrackCurrent()
    const { currentSubtitle } = useSubtitleCurrent()
    const { currentLevel } = useLevelCurrent()
    const { currentSpeed } = useSpeedCurrent()
    return (
        <SettingMenu myRef={myRef}>
            <div onClick={() => changePage(pageName.playbackSpeed, pageDir.forward)}>
                <SettingItem startIcon={<PlaybackSpeed />} content='Playback speed' >
                    <span>
                        X {currentSpeed}

                    </span>
                    <IconWrapper>
                        <ArrowRight />
                    </IconWrapper>
                </SettingItem>
            </div>
            <div onClick={() => changePage(pageName.quality, pageDir.forward)}>
                <SettingItem startIcon={<ChangeQuality />} content='ChangeQuality'>
                    <span>
                        {currentLevel}
                    </span>
                    <IconWrapper>
                        <ArrowRight />
                    </IconWrapper>
                </SettingItem>
            </div>
            <div onClick={() => changePage(pageName.subtitle, pageDir.forward)}>
                <SettingItem startIcon={<Subtitle />} content='Subtitles / cc'>
                    <span>
                        {currentSubtitle}
                    </span>
                    <IconWrapper>
                        <ArrowRight />
                    </IconWrapper>
                </SettingItem>
            </div>
            <div onClick={() => changePage(pageName.audioTrack, pageDir.forward)}>
                <SettingItem startIcon={<AudioIcon />} content='Audio Track'>
                    <span>
                        {currentAudioTrack}
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