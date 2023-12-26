import React, { HTMLAttributes, useEffect, useState } from 'react'
import Icon from '../icons/Icon'
import { useVideo } from '../../hooks/useVideo'
import { MediaPlaylistType } from '../../@types/UseVideoHlsType.model';
import Dialog from '../general/Dialog';
import { DialogTitle } from '../general/DialogStyle';
import Locale from '../locale/Locale';

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
                <DialogTitle>تنظیمات</DialogTitle>
                {subtitles?.map((item, index) => (
                    <button onClick={() => setSubtitle(index)} style={{ backgroundColor: currentSubtitle === index ? 'red' : 'blue' }} key={index + 'speedDialog'} >
                        {item.name}
                    </button>
                ))}
                <button onClick={() => setSubtitle(-1)}>
                    <Locale localeKey="setting_menu_subtitle_off" />
                </button>
            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="subtitle" />
        </>
    )
}

export default Subtitle