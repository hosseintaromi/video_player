import React, { HTMLAttributes, useState } from 'react'
import Icon from '../../icons/Icon'
import { usePlayerContext } from '../../../hooks/usePlayerContext'
import Dialog from '../../general/Dialog'
import { DialogTitle } from '../../general/DialogStyle'
import { SettingItemIcon, SettingItemSpan, SettingMenuItem } from '../red/SettingStyle'
import { CenterBox } from '../../general/FlexCenter'

const Speed = ({ onClick }: HTMLAttributes<HTMLElement>) => {
    const { getSpeeds, changeSpeed } = usePlayerContext()

    const [indexSpeed, setIndexSpeed] = useState(1)
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const setSpeed = (index: number) => {
        changeSpeed(index)
        setIndexSpeed(index)
    }

    return (
        <>
            <Dialog onClose={() => { setIsOpen(false) }} isOpen={isOpen} >
                <DialogTitle>سرعت پخش</DialogTitle>
                {getSpeeds().map((item, index) => (
                    <SettingMenuItem
                        onClick={() => setSpeed(index)}
                        className={`is-reversed ${indexSpeed === index ? 'active' : ''}`} key={index + 'speedDialog'}
                    >
                        <CenterBox>
                            <SettingItemIcon className='reversed-icon' style={{ display: indexSpeed === index ? 'flex' : 'none' }}>
                                <Icon isClickable={true} type='checkMark' />
                            </SettingItemIcon>
                            <SettingItemSpan className='reserved-span'>
                                {item}
                            </SettingItemSpan>
                        </CenterBox>
                    </SettingMenuItem>
                ))}
            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="speed" />
        </>
    )
}

export default Speed