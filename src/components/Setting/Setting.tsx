import React, { useRef } from 'react';
import SettingIcon from "../assets/Icons/SettingIcon";
import Overlay from './Overlay';

import SettingList from './SettingList';
import SettingPlaybackSpeed from './SettingPlaybackSpeed';
import styled from '@emotion/styled';
import SettingQuality from './SettingQuality';
import { audioTrackObjType, qualityObjType, subtitleObjType } from '../../@types/hooks/UseVideoHlsType';
import SettingSubtitle from './SettingSubtitle';
import SettingAudioTrack from './SettingAudioTrack';
import { IconWrapper } from '../General/FlexCenter';

type settingPropsType = {
    speedList: number[]
    videoRef: React.RefObject<HTMLVideoElement>
    quality: qualityObjType
    subtitle: subtitleObjType
    audioTrack: audioTrackObjType
}

const OverlayContainer = styled.div({
    backgroundColor: 'rgb(40 40 39 / 60%)',
    fontSize: '15px',
    width: '300px',
    borderRadius: '15px',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    position: 'absolute',
    bottom: '50px',
    right: '0',

})

export enum pageName {
    settingList = 'settingList',
    playbackSpeed = 'playbackSpeed',
    quality = 'quality',
    subtitle = 'subtitle',
    audioTrack = 'audioTrack'
}
export enum pageDir { back = 'back', forward = 'forward' }

const Setting = (props: settingPropsType) => {
    const settingListRef = useRef<HTMLDivElement>(null)
    const settingPlaybackRef = useRef<HTMLDivElement>(null)
    const settingQualityRef = useRef<HTMLDivElement>(null)
    const settingSubtitleRef = useRef<HTMLDivElement>(null)
    const settingAudioTrackRef = useRef<HTMLDivElement>(null)
    const lastSettingRef = useRef<HTMLDivElement | null>();

    const pageObj = {
        [pageName.settingList]: settingListRef,
        [pageName.playbackSpeed]: settingPlaybackRef,
        [pageName.quality]: settingQualityRef,
        [pageName.subtitle]: settingSubtitleRef,
        [pageName.audioTrack]: settingAudioTrackRef,
    }

    const changePage = (newPageName: pageName, dir: pageDir) => {
        const firstEl = lastSettingRef.current;
        const secondEl = pageObj[newPageName].current;
        if (!secondEl) return;
        if (firstEl) {
            firstEl!.style.position = "absolute";
            firstEl!.style.opacity = "1";
            firstEl!.style.transform = `translateX(${dir === pageDir.back ? 0 : 0}%)`;
            secondEl!.style.opacity = "0";
            secondEl!.style.position = "absolute";
            secondEl!.style.transform = `translateX(${dir === pageDir.back ? 100 : -100}%)`;
            secondEl!.parentElement!.style.height = firstEl?.clientHeight + 'px';
        } else {
            secondEl!.style.opacity = "1";
            secondEl!.style.transform = `translateX(0%)`;
        }
        if (firstEl) {
            firstEl!.style.opacity = "0";
            firstEl!.style.transform = `translateX(${dir === pageDir.back ? -100 : 100}%)`;
            firstEl!.style.zIndex = `1`;
        }
        if (newPageName === pageName.settingList) {
            secondEl!.style.width = "300px";
            secondEl!.parentElement!.style.width = "300px";

        } else {
            secondEl!.parentElement!.style.width = "200px";
            secondEl!.style.width = "200px";
        }
        secondEl!.style.zIndex = "10";
        secondEl!.style.opacity = "1";
        secondEl!.style.transform = `translateX(${dir === pageDir.back ? 0 : 0}%)`;
        secondEl!.parentElement!.style.height = secondEl?.clientHeight + 'px';
        lastSettingRef.current = secondEl;
    }

    return (
        <>
            <Overlay openSetting={changePage}>

                <div data-toggler>
                    <IconWrapper >
                        <SettingIcon />
                    </IconWrapper>
                </div>

                <OverlayContainer data-content>

                    <SettingList
                        myRef={settingListRef}
                        changePage={changePage}
                        currentLevel={props.quality.currentQuality === -1 ? 'auto' : props.quality.qualityList[props.quality.currentQuality].height}
                        currentSubtitle={props.subtitle.currentSubtitle === -1 ? 'off' : props.subtitle.subtitleList[props.subtitle.currentSubtitle].name}
                        currentSpeed={props.videoRef?.current?.playbackRate ? props.videoRef?.current?.playbackRate : 'normal'}
                        currentAudioTrack={props.audioTrack.currentAudioTrack === -1 ? 'off' : props.audioTrack.audioTrackList[props.audioTrack.currentAudioTrack].name}
                    />

                    <SettingPlaybackSpeed
                        myRef={settingPlaybackRef}
                        changePage={changePage}
                        speedList={props.speedList}
                        videoRef={props.videoRef} />

                    <SettingQuality
                        myRef={settingQualityRef}
                        changePage={changePage}
                        quality={props.quality} />

                    <SettingSubtitle
                        myRef={settingSubtitleRef}
                        changePage={changePage}
                        subtitle={props.subtitle}
                    />

                    <SettingAudioTrack
                        myRef={settingAudioTrackRef}
                        changePage={changePage}
                        audioTrack={props.audioTrack}
                    />

                </OverlayContainer>

            </Overlay>
        </>
    )
}

export default Setting