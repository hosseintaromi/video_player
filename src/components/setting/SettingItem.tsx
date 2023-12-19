import React, { ReactNode } from 'react'
import { CenterBox, FlexCenter } from '../general/FlexCenter'
import styled from '@emotion/styled';

export const SettingMenuItem = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    cursor: 'pointer',
    height: "40px",
    position: "relative",
    lineHeight: 1,
    '&:hover': {
        backgroundColor: theme.settingBgHover,
    }
}));
const SettingItemSpan = styled.div(({ theme }) => ({
    fontSize: theme.settingFontSize,
    paddingLeft: "41px",
}));
const SettingItemIcon = styled.div({
    paddingRight: "15px",
    paddingLeft: "10px",
    width: "16px",
    position: "absolute",
    left: "0",
    top: "50%",
    transform: "translateY(-50%)",
})
const SettingItemMore = styled.div(({ theme }) => ({
    paddingRight: "10px",
    paddingLeft: "15px",
    fontSize: theme.settingFontSize
}));
const SettingCenter = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <CenterBox style={{position: "relative"}}>
            {children}
        </CenterBox>
    )
}

type settingItemProps = {
    children?: JSX.Element[] | JSX.Element,
    startIcon: JSX.Element | null,
    content: ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}
const SettingItem = ({ children, startIcon, content, onClick }: settingItemProps) => {
    return (
        <SettingMenuItem onClick={onClick}>
            <SettingCenter>
                <SettingItemIcon>
                    {startIcon ? startIcon : <></>}
                </SettingItemIcon>
                <SettingItemSpan>
                    {content}
                </SettingItemSpan>
            </SettingCenter>
            {
                children &&
                <SettingItemMore>
                    <FlexCenter>
                        {children}
                    </FlexCenter>
                </SettingItemMore>
            }
        </SettingMenuItem>
    )
}

export default SettingItem