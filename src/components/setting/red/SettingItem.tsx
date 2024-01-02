import React, { HTMLAttributes, ReactNode } from 'react'
import { FlexCenter } from '../../general/FlexCenter'

const SettingCenter = ({ children }: HTMLAttributes<HTMLElement>) => {
    return (
        <div className='center-box' style={{ position: "relative" }}>
            {children}
        </div>
    )
}

type settingItemProps = {
    startIcon: JSX.Element | null,
    text?: ReactNode,
} & HTMLAttributes<HTMLElement>
const SettingItem = ({ children, startIcon, text, onClick, className }: settingItemProps
) => {
    return (
        <div className={className} onClick={onClick}>
            <SettingCenter>
                <div className='setting-item-icon'>
                    {startIcon ? startIcon : <></>}
                </div>
                <div className='setting-item-span'>
                    {text}
                </div>
            </SettingCenter>
            {
                children &&
                <div className='setting-item-more'>
                    <FlexCenter>
                        {children}
                    </FlexCenter>
                </div>
            }
        </div>
    )
}

export default SettingItem