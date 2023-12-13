import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { pageDir, pageName } from './Setting'
import { FlexCenter } from '../general/FlexCenter'
import Icon from '../icons/Icon'
import React from 'react'

type settingHeaderPropsType = {
    title: ReactNode,
    hasCustomButton: boolean,
    hasBackButton: boolean,
    changePage: (newPageName: pageName, dir: pageDir) => void,
    backRoute: pageName
}

const SettingHeaderWrapper = styled.div({
    backgroundColor: 'rgb(40 40 39 / 60%)',
    display: 'flex',
    fontSize: '18px',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '40px',
    padding: '0 10px',
    'svg': {
        transform: 'rotate(180deg)'
    }
})

const SettingHeader = ({ title, hasCustomButton, hasBackButton, changePage }: settingHeaderPropsType) => {
    return (
        <SettingHeaderWrapper>
            {hasBackButton && <div onClick={() => changePage(pageName.settingList, pageDir.back)}>
                <FlexCenter >
                    <Icon isClickable={true} type="arrow" />
                    <span>
                        {title}
                    </span>
                </FlexCenter>
            </div>
            }
            <FlexCenter>
                {hasCustomButton ? <span>custom</span> : <></>}
            </FlexCenter>
        </SettingHeaderWrapper>
    )
}

export default SettingHeader