import React, { ReactNode, RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import RangeSelect from '../RangeSelect/RangeSelect'
import FullScreenIcon from "../Icons/FullScreenIcon";
import ExitFullScreenIcon from "../Icons/ExitFullScreenIcon";
import { IconWrapper } from '../General/FlexCenter';
import SettingMenu from "../Setting/Setting";
import { useFullscreen } from '../../hooks/useFullscreen';
import { calculatePlayerTime } from '../../utils/global-filter';
import { useVideoRefContext, useVideoWrapperRef } from '../../contexts/VideoContext';
import { SettingItemWrapper, SettingLeftSection, SettingRightSection, TimeCounter } from './ToolbarStyle';
import Volume from './Volume';
import { ToolBarPlayIcon } from '../VideoPlayer/VideoPlayerStyle';
import PictureInPicture from '../Icons/PictureInPicture';


type Toolbar = {
    playState: boolean,
    playIcon: ReactNode,
    pauseIcon: ReactNode,
    playClicked: (showPlayIcon: boolean) => void,
}
type ChangeRangeSelectType = {
    calcInputVal: (e: number, updateParent: boolean) => void
};

const Toolbar = ({
    playState,
    playIcon,
    pauseIcon,
    playClicked,
}: Toolbar) => {


    const controllerRef = useRef<ChangeRangeSelectType>({
        calcInputVal: () => { }
    });

    const { videoRef } = useVideoRefContext()
    const { videoWrapperRef } = useVideoWrapperRef()
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<string>("00:00:00");
    const [time, settime] = useState<string>("00:00:00");
    const [videoSlider, setVideoSlider] = useState<number>(0);

    function togglePictureInPicture() {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else if (document.pictureInPictureEnabled) {
            //   videoRef.requestPictureInPicture();
            videoRef.current?.requestPictureInPicture();
        }
    }

    const SettingRight = useMemo(() => {
        return (
            <SettingRightSection>
                <IconWrapper onClick={() => togglePictureInPicture()}>
                    <PictureInPicture />
                </IconWrapper>
                <IconWrapper onClick={() => toggleFullscreen()}>
                    {(!isFullscreen ? (
                        <FullScreenIcon />
                    ) : (
                        <ExitFullScreenIcon />
                    ))}
                </IconWrapper>
                <SettingMenu
                    speedList={[0.5, 1, 2]}
                    videoRef={videoRef}
                />
            </SettingRightSection>
        )
    }, [isFullscreen,])

    const TotalTime = useMemo(() => <TimeCounter className="m-timeLeft">{time}</TimeCounter>, [time])

    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;
        setInterval(() => {
            if (!videoRef.current) return;
            const calcVideoPercentage = (videoRef.current.currentTime / videoRef.current.duration) * 100
            controllerRef.current.calcInputVal(calcVideoPercentage, false);
            settime(calculatePlayerTime(videoEl.duration));
            setCurrentTime(calculatePlayerTime(videoEl.currentTime));
            setVideoSlider((videoEl.currentTime / videoEl.duration) * 100);
        }, 1000);
    }, []);

    const { toggleFullscreen } = useFullscreen((e) => {
        setIsFullscreen(e);
        (window.screen.orientation as any)?.lock("landscape-primary");
    }, videoWrapperRef, videoRef);

    const VolComp = useMemo(() => <Volume />, [])

    const rangeSelectChangeVideoTime = useCallback((e: number) => {
        if (!videoRef.current) return;
        videoRef.current.currentTime =
            (e * videoRef.current.duration) / 100;
    }, [])
    return (
        <>
            <RangeSelect
                value={videoSlider}
                min={0}
                max={100}
                step={1}
                controllerRef={controllerRef}
                onChangeCallback={rangeSelectChangeVideoTime}
            />
            <SettingItemWrapper>
                <SettingLeftSection >
                    <ToolBarPlayIcon onClick={() => playClicked(false)}>
                        {playState ? playIcon : pauseIcon}
                    </ToolBarPlayIcon>
                    {VolComp}
                    <TimeCounter className="m-timeLeft">{currentTime}/</TimeCounter>
                    {TotalTime}
                </SettingLeftSection>

                {SettingRight}
            </SettingItemWrapper>
        </>
    )
}

export default Toolbar