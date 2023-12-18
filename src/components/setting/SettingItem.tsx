import React, { ReactNode } from 'react'
import { FlexCenter } from '../general/FlexCenter'
import styled from '@emotion/styled';

export const SettingMenuItem = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    cursor: 'pointer',
    height: "40px",
    '&:hover': {
        backgroundColor: theme.settingBgHover,
    }
}));

const SettingItemSpan = styled.span({
})
const SettingItemIcon = styled.span({
    paddingRight: "15px",
    paddingLeft: "10px",
})
const SettingItemMore = styled.span({
    paddingRight: "10px",
    paddingLeft: "15px",
})
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