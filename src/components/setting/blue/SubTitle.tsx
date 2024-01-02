import React, { HTMLAttributes, useEffect, useState } from 'react'
import Icon from '../../icons/Icon'
import { useVideo } from '../../../hooks/useVideo'
import { MediaPlaylistType } from '../../../@types/UseVideoHlsType.model';
import Dialog from '../../general/Dialog';
import Locale from '../../locale/Locale';

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
                <div className='dialog-title'>زیرنویس</div>
                {subtitles?.map((item, index) => (
                    <div
                        onClick={() => setSubtitle(index)}
                        className={`setting-menu-item is-reversed ${currentSubtitle === index ? 'active' : ''}`} key={index + 'speedDialog'}
                    >
                        <div className='center-box'>
                            <div className='setting-item-icon reversed-icon' style={{ display: currentSubtitle === index ? 'flex' : 'none' }}>
                                <Icon isClickable={true} type='checkMark' />
                            </div>
                            <div className='setting-item-span reserved-span'>
                                {item.name}
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    onClick={() => setSubtitle(-1)}
                    className={`setting-menu-item is-reversed ${currentSubtitle === -1 ? 'active' : ''}`} key={-1 + 'speedDialog'}
                >
                    <div className='center-box'>
                        <div className='setting-item-icon reversed-icon' style={{ display: currentSubtitle === -1 ? 'flex' : 'none' }}>
                            <Icon isClickable={true} type='checkMark' />
                        </div>
                        <div className='setting-item-span reserved-span'>
                            <Locale localeKey="setting_menu_subtitle_off" />
                        </div>
                    </div>
                </div>
            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="subtitle" />
        </>
    )
}

export default Subtitle