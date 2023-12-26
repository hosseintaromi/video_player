import React, { HTMLAttributes, useEffect, useState } from 'react'
import Icon from '../icons/Icon'
import { useVideo } from '../../hooks/useVideo'
import { pageName, pageDir } from '../setting/Setting'
import { MediaPlaylistType } from '../../@types/UseVideoHlsType.model'
import Dialog from '../general/Dialog'
import { DialogTitle } from '../general/DialogStyle'
import Locale from '../locale/Locale'

const Mic = ({ onClick }: HTMLAttributes<HTMLElement>) => {
    const [currentAudioTrack, setCurrentAudioTrack] = useState<number | undefined>()
    const [audioTracks, setAudioTracks] = useState<MediaPlaylistType>()
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const loadLevels = () => {
        setCurrentAudioTrack(getAudioTrack())
        setAudioTracks(getAudioTracks() || [])
    }
    const { getAudioTrack, getAudioTracks, changeAudioTrack } = useVideo({ onLoaded: loadLevels })
    useEffect(() => {
        loadLevels()
    }, [])

    const setAudioTrack = (index: number) => {
        changeAudioTrack(index)
        setCurrentAudioTrack(index)
    }
    return (
        <>
            <Dialog onClose={() => { setIsOpen(false) }} isOpen={isOpen} >
                <DialogTitle>تنظیمات</DialogTitle>
                {audioTracks?.map((item, index) => (
                    <button onClick={() => setAudioTrack(index)} style={{ backgroundColor: currentAudioTrack === index ? 'red' : 'blue' }} key={index + 'speedDialog'} >
                        {item.name}
                    </button>
                ))}
                <button onClick={() => setAudioTrack(-1)}>
                    <Locale localeKey="setting_menu_subtitle_off" />
                </button>
            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="mic" />
        </>
    )
}

export default Mic