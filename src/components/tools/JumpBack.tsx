import React, { ReactNode } from 'react'
import Icon from '../icons/Icon'

const JumpBack = ({ children }: { children?: ReactNode }) => {

    const jumpBack = () => {
    }

    return (
        <>
            {
                <Icon isClickable={true} onClick={jumpBack} type='jumpBack' />
            }
        </>
    )
}

export default JumpBack