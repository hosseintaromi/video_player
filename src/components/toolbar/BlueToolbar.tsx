import React from 'react';
import { SettingItemWrapper, SettingLeftSection, SettingRightSection, TimeCounter, TimeDivider, ToolbarWrapper } from '../toolbar/ToolbarStyle';
import { ToolBarPlayIcon } from '../player/VideoPlayerStyle';
import Setting from '../setting/red/Setting';
import Play from '../tools/Play';
import Volume from '../tools/Volume';
import Time from '../tools/Time';
import PictureInPicture from '../tools/PictureInPicture';
import Fullscreen from '../tools/Fullscreen';
import MediaTimeLine from '../timeline/MediaTimeLine';
import Speed from '../setting/blue/Speed';
import Subtitle from '../setting/blue/SubTitle';
import Mic from '../setting/blue/Mic';
import Quality from '../setting/blue/Quality';
import Mute from '../tools/Mute';

const BlueToolbar = ({ isFaded }: { isFaded: boolean }) => {

    return (
        <ToolbarWrapper isFaded={isFaded}>
            <TimeCounter className='blue-counter'>
                <Time type='Current' />
                <Time type='Total' />
            </TimeCounter>
            <MediaTimeLine />
            <SettingItemWrapper className='blue-setting-wrapper'>
                <SettingLeftSection >
                    <ToolBarPlayIcon>
                        <Play />
                    </ToolBarPlayIcon>
                    <Mute />
                </SettingLeftSection>
                <SettingRightSection>
                    <Mic />
                    <Subtitle />
                    <Speed />
                    <Quality />
                    <PictureInPicture />
                    <Fullscreen />
                </SettingRightSection>
            </SettingItemWrapper>
        </ToolbarWrapper>
    )
}

export default BlueToolbar