import styled from '@emotion/styled'
import React from 'react'
import ArrowRight from '../assets/Icons/ArrowRight'

type settingHeaderPropsType = {
    title: string,
    hasCustomButton: boolean,
    hasBackButton: boolean,
    changePage: (newPageName: string) => void,
}

const SettingHeaderWrapper = styled.div({
    transform: 'translateX(-35%)',
    backgroundColor: 'rgb(40 40 39 / 60%)',
    display: 'flex',
    fontSize: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    'svg': {
        transform: 'rotate(180deg)'
    }
})

const SettingHeader = ({ title, hasCustomButton, hasBackButton, changePage }: settingHeaderPropsType) => {
    return (
        <SettingHeaderWrapper>
            {hasBackButton && <div onClick={() => changePage('settingList')}>
                <ArrowRight />
            </div>}
            {title}
            {hasCustomButton && <a href="">custom</a>}
        </SettingHeaderWrapper>
    )
}

export default SettingHeader