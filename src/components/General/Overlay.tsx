import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { pageDir, pageName } from '../setting/Setting';
import React from 'react';


const Wrapper = styled.div({
    position: 'relative',

})

const Overlay = ({ children, openSetting }: { children: JSX.Element[], openSetting: any }) => {
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
        openSetting(pageName.settingList, pageDir.forward)

    }, [overlayVisible])
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
                {overlayVisible && <>{Content}</>}
            </Wrapper>
        </div>
    )
}

export default Overlay