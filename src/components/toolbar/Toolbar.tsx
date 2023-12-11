import React from 'react';
import { SettingItemWrapper, SettingLeftSection, SettingRightSection, TimeCounter, ToolbarWrapper } from '../toolbar/ToolbarStyle';
import { ToolBarPlayIcon } from '../player/VideoPlayerStyle';
import Setting from '../setting/Setting';
import Play from '../tools/Play';
import Volume from '../tools/Volume';
import Time from '../tools/Time';
import PictureInPicture from '../tools/PictureInPicture';
import Fullscreen from '../tools/Fullscreen';
import MediaTimeLine from '../timeline/MediaTimeLine';

const Toolbar = () => {

    return (
        <ToolbarWrapper>
            <MediaTimeLine />
            <SettingItemWrapper>
                <SettingLeftSection >
                    <ToolBarPlayIcon>
                        <Play />
                    </ToolBarPlayIcon>
                    <Volume />
                    <TimeCounter>
                        <Time type='Current' />
                        /
                    </TimeCounter>
                    <Time type='Total' />
                </SettingLeftSection>
                <SettingRightSection>
                    <Setting />
                    <PictureInPicture />
                    <Fullscreen />
                </SettingRightSection>
            </SettingItemWrapper>
        </ToolbarWrapper>
    )
}

export default Toolbar