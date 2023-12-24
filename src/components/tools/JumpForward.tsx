import React, { ReactNode } from 'react'
import Icon from '../icons/Icon'

const JumpForward = ({ children }: { children?: ReactNode }) => {

    const jumpForward = () => {
    }

    return (
        <>
            {
                <Icon isClickable={true} onClick={jumpForward} type='jumpForward' />
            }
        </>
    )
}

export default JumpForward