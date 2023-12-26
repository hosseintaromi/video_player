import React from 'react';
import { SettingItemWrapper, SettingLeftSection, SettingRightSection, TimeCounter, TimeDivider, ToolbarWrapper } from '../toolbar/ToolbarStyle';
import { ToolBarPlayIcon } from '../player/VideoPlayerStyle';
import Setting from '../setting/Setting';
import Play from '../tools/Play';
import Volume from '../tools/Volume';
import Time from '../tools/Time';
import PictureInPicture from '../tools/PictureInPicture';
import Fullscreen from '../tools/Fullscreen';
import MediaTimeLine from '../timeline/MediaTimeLine';
import Speed from '../tools/Speed';
import Subtitle from '../tools/SubTitle';
import Mic from '../tools/Mic';
import Quality from '../tools/Quality';

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
                    <Volume />
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