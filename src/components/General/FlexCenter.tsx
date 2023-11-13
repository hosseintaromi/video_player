import styled from '@emotion/styled';
import React, { CSSProperties, MouseEventHandler } from 'react'


const CenterBox = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const FlexCenter = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <CenterBox>
            {children}
        </CenterBox>
    )
}

const IconWrapperStyle = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

type IconWrapperType = {
    children: JSX.Element[] | JSX.Element,
    onClick?: MouseEventHandler<HTMLDivElement> | undefined,
    style?: CSSProperties | undefined
}

export const IconWrapper = ({ children, onClick, style }: IconWrapperType) => {
    return (
        <IconWrapperStyle onClick={onClick} style={style}>
            {children}
        </IconWrapperStyle>
    )
}

const SettingMenuWrapper = styled.div({
    transition: 'all 0.3s ease',
    opacity: '0',
    width: '100%',
    bottom: '0',
    // display: 'none',
});
export const SettingMenu = ({ children, myRef }: { children: JSX.Element[] | JSX.Element, myRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <SettingMenuWrapper ref={myRef} id='settingMenu'>
            {children}
        </SettingMenuWrapper>
    )
} 