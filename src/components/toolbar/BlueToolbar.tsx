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
import { useVideo } from '../../hooks/useVideo';

const BlueToolbar = ({ isFaded }: { isFaded: boolean }) => {
    const [isShowQ, setIsShowQ] = useState<any>()
    const [isShowS, setIsShowS] = useState<any>()
    const [isShowA, setIsShowA] = useState<any>()
    const loadLevels = () => {
        setIsShowQ(getLevels() !== undefined)
        setIsShowS(getSubtitle() !== undefined)
        setIsShowA(getAudioTracks() !== undefined)
    }
    const { getAudioTracks, getLevels, getSubtitle } = useVideo({ onLoaded: loadLevels })

    return (
        <div className='toolbar-wrapper' style={{opacity: isFaded ? 0 : 1}}>
            <div className='time-counter blue-counter'>
                <Time type='Current' />
                <Time type='Total' />
            </div>
            <MediaTimeLine />
            <div className='setting-item-wrapper blue-setting-wrapper'>
                <div className='setting-left-section'>
                    <div className='toolbar-play-icon'>
                        <Play />
                    </div>
                    <Mute />
                </div>
                <div className='setting-right-section'>
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