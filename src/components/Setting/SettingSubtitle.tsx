import React, { useEffect, useState } from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../General/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import CheckMark from '../Icons/IconList/CheckMark';
import { useVideoHls } from '../../hooks/useVideoHls';
import { MediaPlaylistType } from '../../@types/UseVideoHlsType';
import Locale from '../Locale/Locale';

type SettingSubtitleType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>,
}

const SettingSubtitle = ({ changePage, myRef }: SettingSubtitleType) => {
    const [currentSubtitle, setCurrentSubtitle] = useState<number | undefined>()
    const [subtitles, setSubtitles] = useState<MediaPlaylistType>()

    const setSubtitle = (index: number) => {
        changeSubtitle(index)
        setCurrentSubtitle(index)
    }

    const loadLevels = () => {
        setCurrentSubtitle(getCurrentSubtitle())
        setSubtitles(getSubtitle() || [])
    }

    const { getSubtitle, getCurrentSubtitle, changeSubtitle } = useVideoHls({ onLoaded: loadLevels })

    useEffect(() => {
        loadLevels()
    }, [])


    const subtitleListGenerator = () => {
        return subtitles ? subtitles.map((item, index) =>
            <SettingItem
                key={index}
                onClick={() => setSubtitle(index)}
                startIcon={currentSubtitle === index ? < CheckMark /> : null}
                content={item.name}
            />
        ) : <></>
    }
    return (
        <SettingMenu myRef={myRef}>
            <SettingHeader
                title={<Locale localeKey="setting_menu_change_subtitle" />}
                hasBackButton={true}
                hasCustomButton={false}
                changePage={changePage}
                backRoute={pageName.settingList}
            />
            <div>
                <SettingItem
                    onClick={() => setSubtitle(-1)}
                    startIcon={currentSubtitle === -1 ? < CheckMark /> : null}
                    content={<Locale localeKey="setting_menu_subtitle_off" />}
                />
                {subtitleListGenerator()}
            </div>

        </SettingMenu>
    )
}

export default SettingSubtitle