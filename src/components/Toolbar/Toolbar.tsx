import styled from '@emotion/styled'
import React, { ReactNode, RefObject, useEffect, useMemo, useRef, useState } from 'react'
import RangeSelect from '../RangeSelect/RangeSelect'
import FullScreenIcon from "../assets/Icons/FullScreenIcon";
import ExitFullScreenIcon from "../assets/Icons/ExitFullScreenIcon";
import { IconWrapper } from '../General/FlexCenter';
import SettingMenu from "../Setting/Setting";
import { useFullscreen } from '../../hooks/useFullscreen';
import { LevelType, MediaPlaylistType } from '../../@types/hooks/UseVideoHlsType';
import { calculatePlayerTime } from '../../utils/global-filter';
import { useVideoRefContext, useVideoWrapperRef } from '../../contexts/VideoContext';


const SettingRightSection = styled.div({
    display: 'flex',
    gap: '10px',
    fontSize: '25px',
})

const SettingLeftSection = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const SettingItemWrapper = styled.div({
    // position: 'relative',
    display: 'flex',

    justifyContent: "space-between",
    gap: '30px',
    alignItems: 'center',
})

const TimeCounter = styled.span({
    fontSize: "15px",
    color: '#ddd'
})
type Toolbar = {
    playState: boolean,
    playIcon: ReactNode,
    pauseIcon: ReactNode,
    playClicked: (showPlayIcon: boolean) => void,
}

const Toolbar = ({
    playState,
    playIcon,
    pauseIcon,
    playClicked,
}: Toolbar) => {


    type ChangeRangeSelectType = {
        calcInputVal: (e: number, updateParent: boolean) => void
    };

    const controllerRef = useRef<ChangeRangeSelectType>({
        calcInputVal: () => { }
    });

    const { videoRef } = useVideoRefContext()
    const { videoWrapperRef } = useVideoWrapperRef()
    type testType = undefined | string;

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
        < >
            <RangeSelect
                value={videoSlider}
                min={0}
                max={100}
                // inputChangeValue={videoSliderHandler}
                controllerRef={controllerRef} />
            {/* <button
       
        }}
      >
        speed X 4
      </button> */}
            <SettingItemWrapper>
                <SettingLeftSection onClick={() => playClicked(false)}>
                    <span>
                        {playState ? playIcon : pauseIcon}
                    </span>
                    <TimeCounter className="m-timeLeft">{currentTime}/</TimeCounter>

                    {TotalTime}

                </SettingLeftSection>
                {SettingRight}
            </SettingItemWrapper>
        </>
    )
}

export default Toolbar