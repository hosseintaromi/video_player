import React from 'react'
// import './Loading.css'
import styled from '@emotion/styled'
import { keyframes } from "@emotion/react";

const ldsRingFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;
export const LdsRing = styled.div({
    display: 'inline-block',
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: "translate(50%, -50%)",

    'div': {
        boxSizing: 'border-box',
        display: 'block',
        position: 'absolute',
        width: '64px',
        height: '64px',
        margin: '8px',
        border: '8px solid red',
        borderRadius: '50%',
        animation: `${ldsRingFrames} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
        borderColor: 'red transparent transparent transparent',
    },
    '& ldsRingFrames div:nth-child(1)': {
        animationDelay: '-0.45s'
    },
    '& ldsRingFrames div:nth-child(2)': {
        animationDelay: '-0.3s'
    },
    '& ldsRingFrames div:nth-child(3)': {
        animationDelay: '-0.15s'
    }
});


const Loading = () => {
    return (
        <LdsRing><div></div><div></div><div></div><div></div></LdsRing>
    )
}

export default Loading