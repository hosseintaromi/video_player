import styled from '@emotion/styled';
import React from 'react'


const CenterBox = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const FlexCenter = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <CenterBox>
            {children}
        </CenterBox>
    )
}

const IconWrapperStyle = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px'
})

export const IconWrapper = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <IconWrapperStyle>
            {children}
        </IconWrapperStyle>
    )
} 
