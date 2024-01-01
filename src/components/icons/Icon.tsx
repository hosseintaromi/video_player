import { HTMLAttributes } from 'react'
import { IconsType } from '../../@types/player.model'
import { useIcon } from '../../hooks/useIcon'
import React from 'react'

type IconType = {
  type: keyof IconsType
  isClickable: boolean,
} & HTMLAttributes<HTMLElement>
const Icon = ({ type, onClick, isClickable, ...other }: IconType) => {
  const { icons } = useIcon()
  return (
    <div style={{ cursor: isClickable ? 'pointer' : 'default' }} className='icon-wrapper' onClick={onClick} {...other}>{icons[type]}</div>
  )
}

export default Icon
