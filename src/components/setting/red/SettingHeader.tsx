import { ReactNode } from 'react'
import { pageDir, pageName } from './Setting'
import { FlexCenter } from '../../general/FlexCenter'
import Icon from '../../icons/Icon'
import React from 'react'

type settingHeaderPropsType = {
    title: ReactNode,
    hasCustomButton: boolean,
    hasBackButton: boolean,
    changePage: (newPageName: pageName, dir: pageDir) => void,
    backRoute: pageName
}

const SettingHeader = ({ title, hasCustomButton, hasBackButton, changePage }: settingHeaderPropsType) => {
    return (
        <div className='setting-header-wrapper'>
            {hasBackButton && <div className='setting-header-title' onClick={() => changePage(pageName.settingList, pageDir.back)}>
                <Icon isClickable={true} type="arrow" />
                {title}
            </div>
            }
            {hasCustomButton ?
                <FlexCenter>
                    <span>custom</span>
                </FlexCenter>
                : <></>
            }
        </div>
    )
}

export default SettingHeader