import React from 'react'
import { FlexCenter, IconWrapper } from '../General/FlexCenter'
import styled from '@emotion/styled';

const SettingMenuItem = styled.div({
    display: 'flex',
    justifyContent: "space-between",
    padding: '10px',
    '&:hover': {
        backgroundColor: 'rgb(40 40 39 / 60%)',
    }
});
type settingItemProps = {
    children?: JSX.Element[] | JSX.Element,
    startIcon: JSX.Element | null,
    content: string | number
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}
const SettingItem = ({ children, startIcon, content, onClick }: settingItemProps) => {
    return (
        <SettingMenuItem onClick={onClick}>
            <FlexCenter>
                <IconWrapper>
                    {startIcon ? startIcon : <></>}
                </IconWrapper>
                <span>
                    {content}
                </span>
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