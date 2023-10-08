import styled from '@emotion/styled'
import React from 'react'
import ArrowRight from '../assets/Icons/ArrowRight'
import { pageDir, pageName } from './Setting'

type settingHeaderPropsType = {
    title: string,
    hasCustomButton: boolean,
    hasBackButton: boolean,
    changePage: (newPageName: pageName, dir: pageDir) => void,
}

const SettingHeaderWrapper = styled.div({
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
            {hasBackButton && <div onClick={() => changePage(pageName.settingList, pageDir.back)}>
                <ArrowRight />
            </div>}
            {title}
            {hasCustomButton && <a href="">custom</a>}
        </SettingHeaderWrapper>
    )
}

export default SettingHeader