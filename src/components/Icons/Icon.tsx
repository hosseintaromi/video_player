import { HTMLAttributes } from 'react'
import { IconsType } from '../../@types/player'
import { useIcon } from '../../hooks/useIcon'
import styled from '@emotion/styled'
import React from 'react'

const IconWrapperStyle = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})


const Icon = ({ type, ...other }: { type: keyof IconsType } & HTMLAttributes<HTMLElement>) => {
    const { icons } = useIcon()
    return (
        <IconWrapperStyle {...other}>{icons[type]}</IconWrapperStyle>
    )
}

export default Icon
