import React, { ReactNode, useEffect, useState } from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../General/FlexCenter';
import { pageDir, pageName } from './Setting';
import { useVideoHls } from '../../hooks/useVideoHls';
import Locale from '../Locale/Locale';
import { usePlayerContext } from '../../hooks/usePlayerContext';
import { LevelType, MediaPlaylistType } from '../../@types/UseVideoHlsType';
import Icon from '../Icons/Icon';

type SettingListType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>
    currentPage?: HTMLDivElement | null | undefined
}

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
    } = useVideoHls({ onLoaded: loadLevels })

    useEffect(() => {
        loadLevels()
    }, [currentPage])

    return (
        <SettingMenu myRef={myRef}>
            <div onClick={() => { loadLevels(); changePage(pageName.playbackSpeed, pageDir.forward) }}>
                <SettingItem startIcon={<Icon type='speed' />} content={<Locale localeKey="setting_menu_change_speed_title" />} >
                    <span>
                        {currentPlayBackSpeed}
                    </span>
                    <Icon type="arrow" />
                </SettingItem>
            </div>
            <div onClick={() => { loadLevels(); changePage(pageName.quality, pageDir.forward) }}>
                <SettingItem startIcon={<Icon type='quality' />} content={<Locale localeKey="setting_menu_change_quality_title" />}>
                    <span>
                        {
                            currentLevel === -1 ? <Locale localeKey="setting_menu_quality_active_list" /> : currentLevels?.[currentLevel]?.height
                        }
                    </span>
                    <Icon type="arrow" />
                </SettingItem>
            </div>
            <div onClick={() => { loadLevels(); changePage(pageName.subtitle, pageDir.forward) }}>
                <SettingItem startIcon={<Icon type='subtitle' />} content={<Locale localeKey="setting_menu_change_subtitle" />}>
                    <span>
                        {currentSubtitle}
                    </span>
                    <Icon type="arrow" />
                </SettingItem>
            </div>
            <div onClick={() => { loadLevels(); changePage(pageName.audioTrack, pageDir.forward) }}>
                <SettingItem startIcon={<Icon type='audioTrack' />} content={<Locale localeKey="setting_menu_change_audio_track_title" />}>
                    <span>
                        {currentAudioTrack}
                    </span>
                    <Icon type="arrow" />
                </SettingItem>
            </div>
        </SettingMenu>
    )
}

export default SettingList