import React, { HTMLAttributes, useState } from 'react'
import Icon from '../../icons/Icon'
import { usePlayerContext } from '../../../hooks/usePlayerContext'
import Dialog from '../../general/Dialog'
import { DialogTitle } from '../../general/DialogStyle'
import { SettingItemIcon, SettingItemSpan, SettingMenuItem } from '../red/SettingStyle'
import { CenterBox } from '../../general/FlexCenter'

const Speed = ({ onClick }: HTMLAttributes<HTMLElement>) => {
    const { speeds, changeSpeed } = usePlayerContext()

    const [indexSpeed, setIndexSpeed] = useState(1)
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const setSpeed = (index: number) => {
        changeSpeed(index)
        setIndexSpeed(index)
    }

    return (
        <>
            <Dialog onClose={() => { setIsOpen(false) }} isOpen={isOpen} >
                <div className='center-box dialog-title'>سرعت پخش</div>
                {speeds.map((item, index) => (
                    <div
                        onClick={() => { setSpeed(index); setIsOpen(pre => !pre) }}
                        className={`center-box setting-menu-item is-reversed ${indexSpeed === index ? 'active' : ''}`} key={index + 'speedDialog'}
                    >
                        <div className='center-box'>
                            <div className='setting-item-icon' style={{ display: indexSpeed === index ? 'flex' : 'none' }}>
                                <Icon isClickable={true} type='checkMark' />
                            </div>
                            <span className='setting-item-span'>
                                {item}
                            </span>
                        </div>
                    </div>
                ))}
            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="speed" />
        </>
    )
}

export default Speed