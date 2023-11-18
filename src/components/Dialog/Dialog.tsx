import React, { ReactNode } from 'react'
import {
    ModalContent,
    ModalOverlay,
    ModalWrapper
}
    from './DialogStyle';
import Setting from '../Setting/Setting';
import { useVideoRefContext } from '../../contexts/VideoContext';
import { createPortal } from 'react-dom';

type DialogPropsType = {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Dialog = ({ children, isOpen, onClose }: DialogPropsType) => {
    const { videoRef } = useVideoRefContext()

    return (<>
        {createPortal(
            isOpen && <ModalOverlay onClick={onClose}>
                <ModalWrapper onClick={e => e.stopPropagation()}>
                    <ModalContent>
                        {/* {children} */}
                        <Setting speedList={[1]} videoRef={videoRef} />
                        <button type='button' onClick={onClose}>Close</button>
                    </ModalContent>
                </ModalWrapper>
            </ModalOverlay>,
            document.body
        )}
    </>
    )
}

export default Dialog