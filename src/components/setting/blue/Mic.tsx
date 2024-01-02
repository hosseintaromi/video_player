import React, { HTMLAttributes, useEffect, useState } from 'react'
import Icon from '../../icons/Icon'
import { useVideo } from '../../../hooks/useVideo'
import { MediaPlaylistType } from '../../../@types/UseVideoHlsType.model'
import Dialog from '../../general/Dialog'

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
                <div className='dialog-title'>زبان پخش</div>
                {audioTracks?.map((item, index) => (
                    <div
                        onClick={() => setAudioTrack(index)}
                        className={`setting-menu-item is-reversed ${currentAudioTrack === index ? 'active' : ''}`} key={index + 'speedDialog'}
                    >
                        <div className='center-box'>
                            <div className='setting-item-icon reversed-icon' style={{ display: currentAudioTrack === index ? 'flex' : 'none' }}>
                                <Icon isClickable={true} type='checkMark' />
                            </div>
                            <div className='setting-item-span reserved-span'>
                                {item.name}
                            </div>
                        </div>
                    </div>
                ))}

            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="mic" />
        </>
    )
}

export default Mic