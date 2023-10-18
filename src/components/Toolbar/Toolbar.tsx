import React, { ReactNode, RefObject, useEffect, useMemo, useRef, useState } from 'react'
import RangeSelect from '../RangeSelect/RangeSelect'
import FullScreenIcon from "../Icons/FullScreenIcon";
import ExitFullScreenIcon from "../Icons/ExitFullScreenIcon";
import { IconWrapper } from '../General/FlexCenter';
import SettingMenu from "../Setting/Setting";
import { useFullscreen } from '../../hooks/useFullscreen';
import { calculatePlayerTime } from '../../utils/global-filter';
import { useVideoRefContext, useVideoWrapperRef } from '../../contexts/VideoContext';
import { SettingItemWrapper, SettingLeftSection, SettingRightSection, TimeCounter } from './ToolbarStyle';
import HighVolume from '../Icons/HighVolume';
import LowVolume from '../Icons/LowVolume';
import MuteVolume from '../Icons/MuteVolume';
import Volume from './Volume';



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

    const SettingRight = useMemo(() => {
        return (
            <SettingRightSection>
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


    return (
        <>
            <RangeSelect
                value={videoSlider}
                min={0}
                max={100}
                controllerRef={controllerRef} />
            <SettingItemWrapper>
                <SettingLeftSection >
                    <span onClick={() => playClicked(false)}>
                        {playState ? playIcon : pauseIcon}
                    </span>
                    <TimeCounter className="m-timeLeft">{currentTime}/</TimeCounter>
                    {TotalTime}
                    <Volume />
                </SettingLeftSection>
                {SettingRight}
            </SettingItemWrapper>
        </>
    )
}

export default Toolbar