import React, { ReactNode } from 'react'
import { FlexCenter } from '../general/FlexCenter'
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
    fontSize: theme.settingFontSize
}));
const SettingItemIcon = styled.div({
    paddingRight: "15px",
    paddingLeft: "10px",
})
const SettingItemMore = styled.div(({ theme }) => ({
    paddingRight: "10px",
    paddingLeft: "15px",
    fontSize: theme.settingFontSize
}));
type settingItemProps = {
    children?: JSX.Element[] | JSX.Element,
    startIcon: JSX.Element | null,
    content: ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}
const SettingItem = ({ children, startIcon, content, onClick }: settingItemProps) => {
    return (
        <SettingMenuItem onClick={onClick}>
            <FlexCenter>
                <SettingItemIcon>
                    {startIcon ? startIcon : <></>}
                </SettingItemIcon>
                <SettingItemSpan>
                    {content}
                </SettingItemSpan>
            </FlexCenter>
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