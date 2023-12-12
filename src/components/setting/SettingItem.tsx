import React, { ReactNode } from 'react'
import { FlexCenter } from '../general/FlexCenter'
import styled from '@emotion/styled';

export const SettingMenuItem = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: "space-between",
    padding: '10px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.settingBgHover,
    }
}));

const SettingItemSpan = styled.span({
    paddingLeft: '8px',
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
                {startIcon ? startIcon : <></>}
                <SettingItemSpan>
                    {content}
                </SettingItemSpan>
            </FlexCenter>
            {
                children &&
                <FlexCenter>
                    {children}
                </FlexCenter>
            }
        </SettingMenuItem>
    )
}

export default SettingItem