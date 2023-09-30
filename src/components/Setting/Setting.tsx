import styled from '@emotion/styled';
import React from 'react';
import SettingIcon from "../assets/Icons/SettingIcon";
import PlaybackSpeed from '../assets/Icons/PlaybackSpeed';
import Overlay from './Overlay';
import ArrowRight from '../assets/Icons/ArrowRight';
import { FlexCenter, IconWrapper } from '../General/FlexCenter';
import ChangeQuality from '../assets/Icons/ChangeQuality';


const SettingMenu = styled.div({
    backgroundColor: 'rgb(40 40 39 / 60%)',
    fontSize: '15px',
    width: '300px',
    transform: 'translateX(-35%)',
    borderRadius: '',
});

const SettingMenuItem = styled.div({
    display: 'flex',
    justifyContent: "space-between",
    padding: '10px',
    '&:hover': {
        backgroundColor: 'rgb(40 40 39 / 60%)',
    }
});
const MenuWrapper = styled.div({
    // position: 'relative',
})

const Setting = () => {
    return (
        <>
            <Overlay>
                <div data-toggler>
                    <SettingIcon />
                </div>
                <div data-content>
                    <SettingMenu >
                        <SettingMenuItem>
                            <FlexCenter>
                                <IconWrapper>
                                    <PlaybackSpeed />
                                </IconWrapper>
                                <span>
                                    Playback speed
                                </span>
                            </FlexCenter>
                            <FlexCenter>
                                <span>
                                    normal
                                </span>
                                <IconWrapper>
                                    <ArrowRight />
                                </IconWrapper>
                            </FlexCenter>
                        </SettingMenuItem>
                        <SettingMenuItem>
                            <FlexCenter>
                                <IconWrapper>
                                    <ChangeQuality />
                                </IconWrapper>
                                <span>
                                    ChangeQuality
                                </span>
                            </FlexCenter>
                            <FlexCenter>
                                <span>
                                    720
                                </span>
                                <IconWrapper>
                                    <ArrowRight />
                                </IconWrapper>
                            </FlexCenter>
                        </SettingMenuItem>
                    </SettingMenu>
                </div>
            </Overlay>
        </>
    )
}

export default Setting