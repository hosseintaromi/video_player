import React, { ReactNode } from 'react'
import Icon from '../icons/Icon'
import { usePlayerContext } from '../../hooks/usePlayerContext'

const JumpBack = ({ children, type }: { children?: ReactNode, type: 'back' | 'forward' }) => {
    const { increaseTime, decreaseTime } = usePlayerContext()

    const jumpBack = () => {
        decreaseTime(10)
    }

    const JumpForward = () => {
        increaseTime(10)
    }

    return (
        <>
            {type === 'back' ?
                <Icon isClickable={true} onClick={jumpBack} type='jumpBack' /> :
                <Icon isClickable={true} onClick={JumpForward} type='jumpForward' />
            }
        </>
    )
}

export default JumpBack