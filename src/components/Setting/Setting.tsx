import React, { useEffect, useRef, useState } from 'react';
import SettingIcon from "../assets/Icons/SettingIcon";
import Overlay from './Overlay';

import SettingList from './SettingList';
import SettingPlaybackSpeed from './SettingPlaybackSpeed';
import styled from '@emotion/styled';

type settingPropsType = {
    speedList: number[]
    videoRef: React.RefObject<HTMLVideoElement>

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

export enum pageName { settingList = 'settingList', playbackSpeed = 'playbackSpeed', quality = 'quality' }
export enum pageDir { back = 'back', forward = 'forward' }

const Setting = (props: settingPropsType) => {
    const [settingPage, setSettingPage] = useState(pageName.settingList);
    const settingListRef = useRef<HTMLDivElement>(null)
    const settingPlaybackRef = useRef<HTMLDivElement>(null)
    const settingQualityRef = useRef<HTMLDivElement>(null)
    const lastSettingRef = useRef<HTMLDivElement | null>();

    const pageObj = {
        [pageName.settingList]: settingListRef,
        [pageName.playbackSpeed]: settingPlaybackRef,
        [pageName.quality]: settingQualityRef
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
        }
        secondEl!.style.opacity = "1";
        secondEl!.style.transform = `translateX(${dir === pageDir.back ? 0 : 0}%)`;
        secondEl!.parentElement!.style.height = secondEl?.clientHeight + 'px';
        lastSettingRef.current = secondEl;
        // pageObj[lastPage].current!.style.opacity = '0'
        // pageObj[lastPage].current!.style.transform = 'translateX(120%)'
        // pageObj[newPageName].current!.style.opacity = '1'
        // pageObj[newPageName].current!.style.transform = 'translateX(-35%)'

    }

    // const getPage = () => {
    //     switch (settingPage) {
    //         case pageName.settingList:
    //             return (<SettingList
    //                 myRef={settingListRef}
    //                 changePage={changePage} />)
    //         case pageName.playbackSpeed:
    //             return (<SettingPlaybackSpeed
    //                 myRef={settingPlaybackRef}
    //                 changePage={changePage}
    //                 speedList={props.speedList}
    //                 videoRef={props.videoRef} />)
    //         case pageName.quality:
    //             return (
    //                 <SettingQuality
    //                     myRef={settingQualityRef}
    //                     changePage={changePage} />
    //             )

    //     }
    // }
    const openSetting = (val: boolean) => {
        lastSettingRef.current = settingListRef.current;
        if (!settingListRef.current) return;
        settingListRef.current.style.opacity = '1';

    }
    return (
        <>
            <Overlay openSetting={changePage}>
                <div data-toggler>
                    <SettingIcon />
                </div>
                <OverlayContainer data-content>

                    <SettingList
                        myRef={settingListRef}
                        changePage={changePage} />
                    <SettingPlaybackSpeed
                        myRef={settingPlaybackRef}
                        changePage={changePage}
                        speedList={props.speedList}
                        videoRef={props.videoRef} />
                    {/* <SettingQuality
                        myRef={settingQualityRef}
                    changePage={changePage} /> */}
                    {/* {handelSettingPage()} */}
                </OverlayContainer>
            </Overlay>
        </>
    )
}

export default Setting