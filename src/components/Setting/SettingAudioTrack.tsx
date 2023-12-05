import React, { useEffect, useState } from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../General/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import { useVideoHls } from '../../hooks/useVideoHls';
import { MediaPlaylistType } from '../../@types/UseVideoHlsType';
import Locale from '../Locale/Locale';
import Icon from '../Icons/Icon';

type SettingAudioTrackType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>,
}

const SettingAudioTrack = ({ changePage, myRef }: SettingAudioTrackType) => {
    const [currentAudioTrack, setCurrentAudioTrack] = useState<number | undefined>()
    const [audioTracks, setAudioTracks] = useState<MediaPlaylistType>()
    const loadLevels = () => {
        setCurrentAudioTrack(getAudioTrack())
        setAudioTracks(getAudioTracks() || [])
    }
    const { getAudioTrack, getAudioTracks, changeAudioTrack } = useVideoHls({ onLoaded: loadLevels })
    useEffect(() => {
        loadLevels()
    }, [])

    const setAudioTrack = (index: number) => {
        changeAudioTrack(index)
        setCurrentAudioTrack(index)
    }

    const audioTrackListGenerator = () => {
        return audioTracks ? audioTracks.map((item, index) =>
            <SettingItem
                key={index}
                onClick={() => setAudioTrack(index)}
                startIcon={currentAudioTrack === index ? <Icon type='checkMark' /> : null}
                content={item.name}
            />
        ) : <></>
    }
    return (
        <SettingMenu myRef={myRef}>
            <SettingHeader
                title={<Locale localeKey="setting_menu_change_audio_track_title" />}
                hasBackButton={true}
                hasCustomButton={false}
                changePage={changePage}
                backRoute={pageName.settingList}
            />
            <div>
                {audioTrackListGenerator()}
            </div>

        </SettingMenu>
    )
}

export default SettingAudioTrack