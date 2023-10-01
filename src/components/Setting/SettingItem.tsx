import React from 'react'
import { FlexCenter, IconWrapper } from '../General/FlexCenter'
import PlaybackSpeed from '../assets/Icons/PlaybackSpeed'
import ArrowRight from '../assets/Icons/ArrowRight'
import styled from '@emotion/styled';

const SettingMenuItem = styled.div({
    display: 'flex',
    justifyContent: "space-between",
    padding: '10px',
    '&:hover': {
        backgroundColor: 'rgb(40 40 39 / 60%)',
    }
});
type settingItemProps = { children?: JSX.Element[] | JSX.Element, startIcon: JSX.Element, content: string }
const SettingItem = ({ children, startIcon, content }: settingItemProps) => {
    return (
        <SettingMenuItem>
            <FlexCenter>
                <IconWrapper>
                    {startIcon}
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