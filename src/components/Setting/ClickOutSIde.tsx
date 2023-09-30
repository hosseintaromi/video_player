import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled';


const ClickOutWrapper = styled.div({
    width: '100%',
    height: '100%',
})
const ClickOutSIde = ({ children }: { children: number | string | JSX.Element | JSX.Element[] }) => {
    const targetSection = useRef<HTMLDivElement>(null)

    let x: any;
    useEffect(() => {
        console.log(children)
        document.addEventListener('click', (e: any) => {
            console.log(targetSection.current?.contains(e.currentTarget))
        })
    }, [])
    return (
        <ClickOutWrapper ref={targetSection} id='mamad'>{children}</ClickOutWrapper>
    )
}

export default ClickOutSIde