import React, { ReactNode } from 'react'
import {
    ModalContent,
    ModalOverlay,
    ModalWrapper
}
    from './DialogStyle';
import Setting from '../Setting/Setting';
import { useVideoRefContext } from '../../contexts/VideoContext';

type DialogPropsType = {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Dialog = ({ children, isOpen, onClose }: DialogPropsType) => {
    const { videoRef } = useVideoRefContext()

    return (<>
        {isOpen && <ModalOverlay onClick={onClose}>
            <ModalWrapper onClick={e => e.stopPropagation()}>
                <ModalContent>
                    {/* {children} */}
                    <Setting speedList={[1]} videoRef={videoRef} />
                    <button type='button' onClick={onClose}>Close</button>
                </ModalContent>
            </ModalWrapper>
        </ModalOverlay>}

    </>
    )
}

export default Dialog