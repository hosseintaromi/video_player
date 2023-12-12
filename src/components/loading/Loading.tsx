import React, { useState } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import styled from '@emotion/styled';
import { ring } from '../player/VideoPlayerStyle';

export const RingWrapper = styled.div(({ theme }) => ({

    display: 'inline-block',
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    'div': {
        display: 'block',
        position: 'absolute',
        width: '64px',
        height: '64px',
        border: `4px solid ${theme.iconColor}`,
        borderRadius: '50%',
        animation: `${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
        borderColor: `${theme.iconColor} transparent transparent transparent`,
    },
    'div:nth-child(1)': {
        animationDelay: '-0.45s',
    },
    'div:nth-child(2)': {
        animationDelay: '-0.3s',
    },
    'div:nth-child(3)': {
        animationDelay: '-0.15s',
    }
}));

const Loading = () => {
    const [showLoading, setShowLoading] = useState<boolean>()
    usePlayerContext({
        onLoading: (isLoading: boolean) => {
            setShowLoading(isLoading)
        }
    })
    return (
        showLoading && <RingWrapper><div></div><div></div><div></div><div></div></RingWrapper>
    )
}

export default Loading