import React, { HTMLAttributes, useEffect, useState } from 'react'
import Icon from '../icons/Icon'
import { useVideo } from '../../hooks/useVideo'
import { MediaPlaylistType } from '../../@types/UseVideoHlsType.model';
import Dialog from '../general/Dialog';
import { DialogTitle } from '../general/DialogStyle';
import Locale from '../locale/Locale';
import { SettingItemIcon, SettingItemSpan, SettingMenuItem } from '../setting/SettingStyle';
import { CenterBox } from '../general/FlexCenter';

const Subtitle = ({ onClick }: HTMLAttributes<HTMLElement>) => {
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
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        loadLevels()
    }, [])
    return (
        <>
            <Dialog onClose={() => { setIsOpen(false) }} isOpen={isOpen} >
                <DialogTitle>زیرنویس</DialogTitle>
                {subtitles?.map((item, index) => (
                    <SettingMenuItem
                        onClick={() => setSubtitle(index)}
                        className={`is-reversed ${currentSubtitle === index ? 'active' : ''}`} key={index + 'speedDialog'}
                    >
                        <CenterBox>
                            <SettingItemIcon className='reversed-icon' style={{ display: currentSubtitle === index ? 'flex' : 'none' }}>
                                <Icon isClickable={true} type='checkMark' />
                            </SettingItemIcon>
                            <SettingItemSpan className='reserved-span'>
                                {item.name}
                            </SettingItemSpan>
                        </CenterBox>
                    </SettingMenuItem>
                ))}
                <SettingMenuItem
                    onClick={() => setSubtitle(-1)}
                    className='is-reversed'
                >
                    <CenterBox>
                        <SettingItemSpan className='reserved-span'>
                            <Locale localeKey="setting_menu_subtitle_off" />
                        </SettingItemSpan>
                    </CenterBox>
                </SettingMenuItem>
            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="subtitle" />
        </>
    )
}

export default Subtitle