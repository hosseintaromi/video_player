import React, { HTMLAttributes, useEffect, useState } from 'react'
import Icon from '../../icons/Icon'
import { usePlayerEvents } from '../../../hooks/usePlayerEvents'
import { MediaPlaylistType } from '../../../@types/UseVideoHlsType.model'
import Dialog from '../../general/Dialog'
import { DialogTitle } from '../../general/DialogStyle'
import Locale from '../../locale/Locale'
import { SettingItemIcon, SettingItemSpan, SettingMenuItem } from '../red/SettingStyle'
import { CenterBox } from '../../general/FlexCenter'

const Mic = ({ onClick }: HTMLAttributes<HTMLElement>) => {
    const [currentAudioTrack, setCurrentAudioTrack] = useState<number | undefined>()
    const [audioTracks, setAudioTracks] = useState<MediaPlaylistType>()
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const loadLevels = () => {
        setCurrentAudioTrack(getAudioTrack())
        setAudioTracks(getAudioTracks() || [])
    }
    const { getAudioTrack, getAudioTracks, changeAudioTrack } = usePlayerEvents({ onLoaded: loadLevels })
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
                <div className='center-box dialog-title'>زبان پخش</div>
                {audioTracks?.map((item, index) => (
                    <div
                        onClick={() => { setAudioTrack(index); setIsOpen(pre => !pre) }}
                        className={`center-box setting-menu-item is-reversed ${currentAudioTrack === index ? 'active' : ''}`} key={index + 'MicDialog'}
                    >
                        <div className='center-box'>
                            <div className='setting-item-icon' style={{ display: currentAudioTrack === index ? 'flex' : 'none' }}>
                                <Icon isClickable={true} type='checkMark' />
                            </div>
                            <span className='setting-item-span'>
                                {item.name}
                            </span>
                        </div>
                    </div>
                ))}

            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="mic" />
        </>
    )
}

export default Mic