import React, { useEffect, useState } from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../../general/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import CheckMark from '../../icons/icon-list/CheckMark';
import { usePlayerEvents } from '../../../hooks/usePlayerEvents';
import { MediaPlaylistType } from '../../../@types/UseVideoHlsType.model';
import Locale from '../../locale/Locale';
import { SettingItemWrapper } from './SettingStyle';

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
        changePage(pageName.settingList, pageDir.back)
    }

    const loadLevels = () => {
        setCurrentSubtitle(getCurrentSubtitle())
        setSubtitles(getSubtitle() || [])
    }

    const { getSubtitle, getCurrentSubtitle, changeSubtitle } = usePlayerEvents({ onLoaded: loadLevels })

    useEffect(() => {
        loadLevels()
    }, [])


    const subtitleListGenerator = () => {
        return subtitles ? subtitles.map((item, index) =>
            <SettingItem
                key={`subtitleListGenerator${index}`}
                onClick={() => setSubtitle(index)}
                startIcon={currentSubtitle === index ? < CheckMark /> : null}
                text={item.name}
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
            <SettingItemWrapper>
                <SettingItem
                    onClick={() => setSubtitle(-1)}
                    startIcon={currentSubtitle === -1 ? < CheckMark /> : null}
                    text={<Locale localeKey="setting_menu_subtitle_off" />}
                />
                {subtitleListGenerator()}
            </SettingItemWrapper>

        </SettingMenu>
    )
}

export default SettingSubtitle