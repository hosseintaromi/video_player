import styled from '@emotion/styled';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';


const OverlayContent = styled.div({
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
});
const Wrapper = styled.div({
    position: 'relative',
})

const Overlay = ({ children }: { children: JSX.Element[] }) => {
    const overlayContentRef = useRef<HTMLDivElement>(null)
    const [overlayVisible, setOverlayVisible] = useState(false);
    const Toggler = children.find((child) => child.props['data-toggler'] === true);
    const Content = children.find((child) => child.props['data-content'] === true);

    const toggle = () => {
        setOverlayVisible(!overlayVisible)
    }
    const clickHandler = (e: any) => {
        if (overlayContentRef.current && !overlayContentRef.current.contains(e.target)) {
            setOverlayVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', clickHandler, true)
        return () => {
            document.removeEventListener('click', clickHandler, true)
        }
    }, []);

    return (
        <div ref={overlayContentRef}>
            <Wrapper>
                <div onClick={toggle}>
                    {Toggler}
                </div>
                {overlayVisible && <OverlayContent>{Content}</OverlayContent>}
            </Wrapper>
        </div>
    )
}

export default Overlay