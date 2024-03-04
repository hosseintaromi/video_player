import React, { useState } from 'react';
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
import { usePlayerEvents } from '../../hooks/usePlayerEvents';

const BlueToolbar = ({ isFaded }: { isFaded: boolean }) => {
    const [isShowQ, setIsShowQ] = useState<any>()
    const [isShowS, setIsShowS] = useState<any>()
    const [isShowA, setIsShowA] = useState<any>()
    const loadLevels = () => {
        setIsShowQ(getLevels() !== undefined)
        setIsShowS(getSubtitle() !== undefined)
        setIsShowA(getAudioTracks() !== undefined)
    }
    const { getAudioTracks, getLevels, getSubtitle } = usePlayerEvents({ onLoaded: loadLevels })

    return (
        <div className='toolbar-wrapper'>
            <span className='center-box time-counter default-counter'>
                <Time type='Current' />
                <Time type='Total' />
            </span>
            <MediaTimeLine />
            <div className='center-box setting-wrapper default-setting-wrapper'>
                <div className='center-box setting-left'>
                    <div className='center-box setting-play-icon'>
                        <Play />
                    </div>
                    <Mute />
                </div>
                <div className='center-box setting-right'>
                    {isShowA && <Mic />}
                    {isShowS && <Subtitle />}
                    <Speed />
                    {isShowQ && <Quality />}

                    <PictureInPicture />
                    <Fullscreen />
                </div>
            </div>
        </div>
    )
}

export default BlueToolbar