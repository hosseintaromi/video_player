import React, { ReactNode, useEffect, useState } from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../general/FlexCenter';
import { pageDir, pageName } from './Setting';
import { useVideo } from '../../hooks/useVideo';
import Locale from '../locale/Locale';
import { usePlayerContext } from '../../hooks/usePlayerContext';
import { LevelType, MediaPlaylistType } from '../../@types/UseVideoHlsType.model';
import Icon from '../icons/Icon';
import styled from '@emotion/styled';

type SettingListType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>
    currentPage?: HTMLDivElement | null | undefined
}

const SettingItemArrowSpan = styled.span({
    paddingRight: '6px'
})

const SettingList = ({
    changePage,
    myRef,
    currentPage

}: SettingListType
) => {
    const [currentLevel, setCurrentLevel] = useState<number>(-1)
    const [currentLevels, setCurrentLevels] = useState<LevelType | undefined>()

    const [currentSubtitle, setCurrentSubtitle] = useState<string | ReactNode>()
    const [subtitles, setSubtitles] = useState<MediaPlaylistType | undefined>()

    const [audioTracks, setAudioTracks] = useState<MediaPlaylistType | undefined>()
    const [currentAudioTrack, setCurrentAudioTrack] = useState<number | ReactNode>()

    const [currentPlayBackSpeed, setCurrentPlayBackSpeed] = useState<number | undefined>()

    const loadLevels = () => {
        const curlvl = getCurrentLevel().isAuto ? -1 : getCurrentLevel().currentLevel
        setCurrentLevel(curlvl === undefined ? -1 : curlvl)

        const curSub = getCurrentSubtitle()
        setSubtitles(getSubtitle())
        setCurrentSubtitle(curSub === -1 ? <Locale localeKey="setting_menu_subtitle_off" /> : subtitles?.[curSub!].name)

        setAudioTracks(getAudioTracks())
        setCurrentAudioTrack(audioTracks?.[getAudioTrack()!].name)

        setCurrentPlayBackSpeed(getSpeed())
        setCurrentLevels(getLevels())
    }
    const { getSpeed } = usePlayerContext()

    const {
        getCurrentLevel,
        getAudioTrack,
        getCurrentSubtitle,
        getLevels,
        getSubtitle,
        getAudioTracks
    } = useVideo({ onLoaded: loadLevels })

    useEffect(() => {
        loadLevels()
    }, [currentPage])

    return (
        <SettingMenu myRef={myRef}>
            <div onClick={() => { loadLevels(); changePage(pageName.playbackSpeed, pageDir.forward) }}>
                <SettingItem startIcon={<Icon isClickable={true} type='speed' />} content={<Locale localeKey="setting_menu_change_speed_title" />} >
                    <SettingItemArrowSpan>
                        {currentPlayBackSpeed}
                    </SettingItemArrowSpan>
                    <Icon isClickable={true} type="arrow" />
                </SettingItem>
            </div>
            <div onClick={() => { loadLevels(); changePage(pageName.quality, pageDir.forward) }}>
                <SettingItem startIcon={<Icon isClickable={true} type='quality' />} content={<Locale localeKey="setting_menu_change_quality_title" />}>
                    <SettingItemArrowSpan>
                        {
                            currentLevel === -1 ? <Locale localeKey="setting_menu_quality_active_list" /> : currentLevels?.[currentLevel]?.height
                        }
                    </SettingItemArrowSpan>
                    <Icon isClickable={true} type="arrow" />
                </SettingItem>
            </div>
            <div onClick={() => { loadLevels(); changePage(pageName.subtitle, pageDir.forward) }}>
                <SettingItem startIcon={<Icon isClickable={true} type='subtitle' />} content={<Locale localeKey="setting_menu_change_subtitle" />}>
                    <SettingItemArrowSpan>
                        {currentSubtitle}
                    </SettingItemArrowSpan>
                    <Icon isClickable={true} type="arrow" />
                </SettingItem>
            </div>
            <div onClick={() => { loadLevels(); changePage(pageName.audioTrack, pageDir.forward) }}>
                <SettingItem startIcon={<Icon isClickable={true} type='audioTrack' />} content={<Locale localeKey="setting_menu_change_audio_track_title" />}>
                    <SettingItemArrowSpan>
                        {currentAudioTrack}
                    </SettingItemArrowSpan>
                    <Icon isClickable={true} type="arrow" />
                </SettingItem>
            </div>
        </SettingMenu>
    )
}

export default SettingList