import React, { useState } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import styled from '@emotion/styled';
import { ring } from '../player/VideoPlayerStyle';

export const RingWrapper = styled.div(({ theme }) => ({

    display: 'inline-block',
    width: '72px',
    height: '72px',
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
    'div:nthChild(1)': {
        animationDelay: '-0.45s',
    },
    'div:nthChild(2)': {
        animationDelay: '-0.3s',
    },
    'div:nthChild(3)': {
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
        showLoading ? <RingWrapper><div></div><div></div><div></div><div></div></RingWrapper> : <></>
    )
}

export default Loading