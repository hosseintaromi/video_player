import React, { ReactNode } from 'react'
import {
    ModalContent,
    ModalOverlay,
    ModalWrapper
}
    from './DialogStyle';

type DialogPropsType = {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Dialog = ({ children, isOpen, onClose }: DialogPropsType) => {
    return (<>
        {isOpen && <ModalOverlay onClick={onClose}>
            <ModalWrapper onClick={e => e.stopPropagation()}>
                <ModalContent>
                    {children}
                    <button type='button' onClick={onClose}>Close</button>
                </ModalContent>
            </ModalWrapper>
        </ModalOverlay>}

    </>
    )
}

export default Dialog