import { useMemo, useState } from 'react'
import { useFullscreen } from '../../hooks/useFullscreen';
import { SettingItemWrapper, SettingLeftSection, SettingRightSection, TimeCounter, ToolbarWrapper } from './ToolbarStyle';
import Volume from './Volume';
import MediaTimeLine from '../RangeSelect/MediaTimeLine/MediaTimeLine';
import { ToolBarPlayIcon } from '../player/VideoPlayerStyle';
import Icon from '../Icons/Icon';
import { usePlayerContext } from '../../hooks/usePlayerContext';
import { OnUpdateTimeType } from '../../@types/player';
import { calculatePlayerTime } from '../../utils/global-filter';
import Setting from '../setting/Setting';
import React from 'react';

const Toolbar = () => {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [isPlay, setIsPlay] = useState<boolean>(false)

    const [currentTime, setCurrentTime] = useState<string>("00:00:00");
    const [time, setTime] = useState<string>("00:00:00");

    const video_player = document.getElementById("video_player");
    const video_wrapper_id = document.getElementById("video_wrapper_id");

    const { toggleFullscreen } = useFullscreen((e) => {
        setIsFullscreen(e);
        (window.screen.orientation as any)?.lock("landscape-primary");
    }, video_wrapper_id, video_player);

    const { changePlayPause } = usePlayerContext({
        onUpdateTime: (e: OnUpdateTimeType) => {
            setTime(calculatePlayerTime(e.duration))
            setCurrentTime(calculatePlayerTime(e.time))
        },
        onPlayPause: (e) => {
            setIsPlay(e)
        }
    })

    function togglePictureInPicture() {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else if (document.pictureInPictureEnabled) {
            (video_player as HTMLVideoElement).requestPictureInPicture()
        }
    }

    const togglePlay = () => {
        changePlayPause(!isPlay)
    }

    const SettingRight = useMemo(() => {
        return (
            <SettingRightSection>
                <Setting />
                <Icon type='picInPic' onClick={togglePictureInPicture} />
                <Icon onClick={() => toggleFullscreen()} type={!isFullscreen ?
                    "fullScreen"
                    :
                    "unFullScreen"
                }
                />
            </SettingRightSection>
        )
    }, [isFullscreen,])

    const TotalTime = useMemo(() => <TimeCounter className="m-timeLeft">{time}</TimeCounter>, [time])

    const VolComp = useMemo(() => <Volume />, [])

    return (
        <ToolbarWrapper>
            <MediaTimeLine />
            <SettingItemWrapper>
                <SettingLeftSection >
                    <ToolBarPlayIcon onClick={togglePlay}>
                        {isPlay === true ? <Icon type='pause' /> : <Icon type='play' />}
                    </ToolBarPlayIcon>
                    {VolComp}
                    <TimeCounter className="m-timeLeft">{currentTime}/</TimeCounter>
                    {TotalTime}
                </SettingLeftSection>

                {SettingRight}
            </SettingItemWrapper>
        </ToolbarWrapper>
    )
}

export default Toolbar