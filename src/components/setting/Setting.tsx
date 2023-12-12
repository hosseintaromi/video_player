import { useRef, useState } from 'react';
import Overlay from '../general/Overlay';

import SettingList from './SettingList';
import SettingPlaybackSpeed from './SettingPlaybackSpeed';
import styled from '@emotion/styled';
import SettingQuality from './SettingQuality';
import SettingSubtitle from './SettingSubtitle';
import SettingAudioTrack from './SettingAudioTrack';
import Icon from '../icons/Icon';
import React from 'react';


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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export enum pageName {
    settingList = 'settingList',
    playbackSpeed = 'playbackSpeed',
    quality = 'quality',
    subtitle = 'subtitle',
    audioTrack = 'audioTrack'
}
export enum pageDir { back = 'back', forward = 'forward' }

const Setting = () => {
    const settingListRef = useRef<HTMLDivElement>(null)
    const settingPlaybackRef = useRef<HTMLDivElement>(null)
    const settingQualityRef = useRef<HTMLDivElement>(null)
    const settingSubtitleRef = useRef<HTMLDivElement>(null)
    const settingAudioTrackRef = useRef<HTMLDivElement>(null)
    const lastSettingRef = useRef<HTMLDivElement | null>();
    const [currentPage, setCurrentPage] = useState<HTMLDivElement | null>(null);

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
        secondEl!.style.display = "block";
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
        setCurrentPage(lastSettingRef.current)
    }

    return (
        <>
            <Overlay openSetting={changePage}>
                <Icon type='setting' isClickable={true} data-toggler/>
                <OverlayContainer data-content id='setting-menu'>
                    <SettingList
                        myRef={settingListRef}
                        changePage={changePage}
                        currentPage={currentPage}
                    />
                    <SettingPlaybackSpeed
                        myRef={settingPlaybackRef}
                        changePage={changePage}
                    />
                    <SettingQuality
                        myRef={settingQualityRef}
                        changePage={changePage}
                    />

                    <SettingSubtitle
                        myRef={settingSubtitleRef}
                        changePage={changePage}
                    />

                    <SettingAudioTrack
                        myRef={settingAudioTrackRef}
                        changePage={changePage}
                    />

                </OverlayContainer>

            </Overlay>
        </>
    )
}

export default Setting