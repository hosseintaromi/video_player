import React, { useEffect, useState } from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../general/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import CheckMark from '../icons/icon-list/CheckMark';
import { useVideo } from '../../hooks/useVideo';
import { MediaPlaylistType } from '../../@types/UseVideoHlsType.model';
import Locale from '../locale/Locale';
import styled from '@emotion/styled';

type SettingSubtitleType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>,
}

const SettingItemWrapper = styled.span({})

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

    const { getSubtitle, getCurrentSubtitle, changeSubtitle } = useVideo({ onLoaded: loadLevels })

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
            <SettingItemWrapper>
                <SettingItem
                    onClick={() => setSubtitle(-1)}
                    startIcon={currentSubtitle === -1 ? < CheckMark /> : null}
                    content={<Locale localeKey="setting_menu_subtitle_off" />}
                />
                {subtitleListGenerator()}
            </SettingItemWrapper>

        </SettingMenu>
    )
}

export default SettingSubtitle