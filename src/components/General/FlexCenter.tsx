import styled from '@emotion/styled';
import React, { MouseEventHandler } from 'react'


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
    padding: '0 10px'
})

export const IconWrapper = ({ children, onClick }: { children: JSX.Element[] | JSX.Element, onClick?: MouseEventHandler<HTMLDivElement> | undefined }) => {
    return (
        <IconWrapperStyle onClick={onClick}>
            {children}
        </IconWrapperStyle>
    )
}

const SettingMenuWrapper = styled.div({
    transition: 'all 0.3s ease',
    opacity: '0',
    width: '100%',
    bottom: '0'
});
export const SettingMenu = ({ children, myRef }: { children: JSX.Element[] | JSX.Element, myRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <SettingMenuWrapper ref={myRef} id='settingMenu'>
            {children}
        </SettingMenuWrapper>
    )
} 