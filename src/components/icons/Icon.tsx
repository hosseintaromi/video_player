import { HTMLAttributes } from 'react'
import { IconsType } from '../../@types/player.model'
import styled from '@emotion/styled'
import React from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'

type IconType = {
  type: keyof IconsType
  isClickable: boolean,
} & HTMLAttributes<HTMLElement>
const Icon = ({ type, onClick, ...other }: IconType) => {
  const { icons } = usePlayerContext()
  return (
    <div className='icon-wrapper' onClick={onClick} {...other} style={{ cursor: other.isClickable ? 'pointer' : 'default' }}>{icons[type]}</div>
  )
}

export default Icon
