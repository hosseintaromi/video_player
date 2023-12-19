import React, { ReactNode } from 'react'
import {
    ModalContent,
    ModalOverlay,
    ModalWrapper
}
    from './DialogStyle';
import { createPortal } from 'react-dom';

type DialogPropsType = {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Dialog = ({ children, isOpen, onClose }: DialogPropsType) => {

    return (<>
        {createPortal(
            isOpen && <ModalOverlay onClick={onClose}>
                <ModalWrapper onClick={e => e.stopPropagation()}>
                    <ModalContent>
                        <button type='button' onClick={onClose}>Close</button>
                        {children}
                    </ModalContent>
                </ModalWrapper>
            </ModalOverlay>,
            document.body
        )}
    </>
    )
}

export default Dialog