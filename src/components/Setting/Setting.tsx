import styled from '@emotion/styled';
import React from 'react';
import SettingIcon from "../assets/Icons/SettingIcon";
import Overlay from './Overlay';


const SettingMenu = styled.div({
    // position: 'absolute',
    // bottom: '100%',
    // left: '50%',
    // transform: 'translateX(-50%)',
    height: '100px',
    width: '100px',
    backgroundColor: 'red'
});
const MenuWrapper = styled.div({
    // position: 'relative',
})

const Setting = () => {
    // const visibleMenu = useRef(false)
    // const toggleMenu = () => {
    //     visibleMenu.current = !visibleMenu.current
    // }
    return (
        <>
            {/* <MenuWrapper>
             <div onClick={toggleMenu}>
             <SettingIcon />
             </div>
            <>
                <SettingMenu />
            </>
        {visibleMenu.current && } */}

            <Overlay>
                <div data-toggler>
                    <SettingIcon />
                </div>
                <div data-content>
                    <SettingMenu />
                </div>
            </Overlay>
            {/*</MenuWrapper>*/}
        </>
    )
}

export default Setting