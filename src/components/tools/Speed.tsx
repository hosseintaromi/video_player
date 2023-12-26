import React, { HTMLAttributes, useState } from 'react'
import Icon from '../icons/Icon'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import Dialog from '../general/Dialog'
import { DialogTitle, DialogLabel } from '../general/DialogStyle'
import Switch from '../general/Switch'
import Locale from '../locale/Locale'
import SettingItem from '../setting/SettingItem'

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
                    <button style={{ backgroundColor: indexSpeed === index ? 'red' : 'blue' }} key={index + 'speedDialog'} onClick={() => setSpeed(index)}>
                        {item}
                    </button>
                ))}
            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="speed" />
        </>
    )
}

export default Speed