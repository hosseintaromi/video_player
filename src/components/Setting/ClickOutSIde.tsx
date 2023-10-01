import React, { useRef } from 'react'
import styled from '@emotion/styled';


const ClickOutWrapper = styled.div({
    width: '100%',
    height: '100%',
})
const ClickOutSIde = ({ children }: { children: number | string | JSX.Element | JSX.Element[] }) => {
    const targetSection = useRef<HTMLDivElement>(null)


    return (
        <ClickOutWrapper ref={targetSection}>{children}</ClickOutWrapper>
    )
}

export default ClickOutSIde