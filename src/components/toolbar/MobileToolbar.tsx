import React from 'react';
import { MobileSettingPlay, MobileToolbarWrapper, SettingItemWrapper, SettingLeftSection, SettingRightSection, TimeCounter } from '../toolbar/ToolbarStyle';
import { ToolBarPlayIcon } from '../player/VideoPlayerStyle';
import Setting from '../setting/Setting';
import Play from '../tools/Play';
import Volume from '../tools/Volume';
import Time from '../tools/Time';
import PictureInPicture from '../tools/PictureInPicture';
import Fullscreen from '../tools/Fullscreen';
import MediaTimeLine from '../timeline/MediaTimeLine';

const MobileToolbar = ({ isFaded }: { isFaded: boolean }) => {

    return (
        <MobileToolbarWrapper isFaded={isFaded}>
            <Setting />
            <MobileSettingPlay>
                <ToolBarPlayIcon>
                    <Play />
                </ToolBarPlayIcon>
            </MobileSettingPlay>
            <MediaTimeLine />
            <SettingItemWrapper className='setting-item-wrapper'>
                <SettingLeftSection >
                    <TimeCounter>
                        <Time type='Current' />
                        /
                    </TimeCounter>
                    <Time type='Total' />
                </SettingLeftSection>
                <SettingRightSection>
                    <Fullscreen />
                </SettingRightSection>
            </SettingItemWrapper>
        </MobileToolbarWrapper>
    )
}

export default MobileToolbar