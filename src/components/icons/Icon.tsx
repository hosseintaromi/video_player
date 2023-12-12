import { HTMLAttributes } from 'react'
import { IconsType } from '../../@types/player.model'
import { useIcon } from '../../hooks/useIcon'
import styled from '@emotion/styled'
import React from 'react'

const IconWrapperStyle = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.iconColor
}),
  ({ isClickable }: { isClickable: boolean }) => ({ cursor: isClickable ? 'pointer' : 'default' })
);
type IconType = {
  type: keyof IconsType
  isClickable: boolean,
} & HTMLAttributes<HTMLElement>
const Icon = ({ type, ...other }: IconType) => {
  const { icons } = useIcon()
  return (
    <IconWrapperStyle {...other}>{icons[type]}</IconWrapperStyle>
  )
}

export default Icon
