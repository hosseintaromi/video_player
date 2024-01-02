import React, { HTMLAttributes } from 'react'

export const FlexCenter = ({ children }: HTMLAttributes<HTMLElement> ) => {
    return (
        <div className='center-box'>
            {children}
        </div>
    )
}

export const SettingMenu = ({ children, myRef }: { children: JSX.Element[] | JSX.Element, myRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <div className='setting-menu-wrapper' ref={myRef} id='settingMenu'>
            {children}
        </div>
    )
} 