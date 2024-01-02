import React, { HTMLAttributes, useState } from 'react'
import Icon from '../../icons/Icon'
import { usePlayerContext } from '../../../hooks/usePlayerContext'
import Dialog from '../../general/Dialog'

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
                <div className='dialog-title'>سرعت پخش</div>
                {getSpeeds().map((item, index) => (
                    <div
                        onClick={() => setSpeed(index)}
                        className={`setting-menu-item is-reversed ${indexSpeed === index ? 'active' : ''}`} key={index + 'speedDialog'}
                    >
                        <div className='center-box'>
                            <div className='setting-item-icon reversed-icon' style={{ display: indexSpeed === index ? 'flex' : 'none' }}>
                                <Icon isClickable={true} type='checkMark' />
                            </div>
                            <div className='setting-item-span reserved-span'>
                                {item}
                            </div>
                        </div>
                    </div>
                ))}
            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="speed" />
        </>
    )
}

export default Speed