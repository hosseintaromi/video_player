import styled from '@emotion/styled';
import React, { useState } from 'react';
import Icon from '../icons/Icon';
const SwitchButton = styled.button({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "48px",
    height: "48px",
    padding: 0,
    border: "none",
    outline: "none",
    font: "inherit",
    textTransform: "inherit",
    color: "inherit",
    background: "transparent",
})
const Spanner = styled.div({
    width: "36px",
    height: "14px",
    position: "relative",
})
const PauseSpanner = styled.div({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "6px",
    width: "20px",
    height: "20px",
})
const PlaySpanner = styled.div({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "22px",
    width: "20px",
    height: "20px",
})
const Switch = () => {
    const [autoPlay, setAutoPlay] = useState<boolean>(true)
    const togglePlay = () => {
        setAutoPlay(!autoPlay)
    }

    return (
        <SwitchButton onClick={togglePlay}>
            <Spanner>
                <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <rect x="1" width="34" height="14" rx="7" fill="white" fillOpacity="0.5"></rect>
                </svg>
            </Spanner>
            {
                autoPlay === true ?
                    <PauseSpanner>
                        <Icon isClickable={true} type='autoPlayOn' />
                    </PauseSpanner>
                    :
                    <PlaySpanner>
                        <Icon isClickable={true} onClick={togglePlay} type='autoPlayOff' />
                    </PlaySpanner>
            }
        </SwitchButton>
    )
}
export default Switch;