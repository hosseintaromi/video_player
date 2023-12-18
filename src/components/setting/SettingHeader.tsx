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

const SettingHeaderWrapper = styled.div(({ theme }) => ({
    'svg': {
        transform: 'rotate(180deg)',
        marginRight: "10px",
        marginLeft: "15px",
    }
}));

const SettingHeaderTitle = styled.div(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.iconColor}33`,
    lineHeight: "inherit",
    fontSize: "14px",
    color: theme.iconColor,
    paddingRight: "15px",
    height: "40px",
    whiteSpace: "nowrap",
}));

const SettingHeader = ({ title, hasCustomButton, hasBackButton, changePage }: settingHeaderPropsType) => {
    return (
        <SettingHeaderWrapper>
            {hasBackButton && <SettingHeaderTitle onClick={() => changePage(pageName.settingList, pageDir.back)}>
                <Icon isClickable={true} type="arrow" />
                {title}
            </SettingHeaderTitle>
            }
            {hasCustomButton ?
                <FlexCenter>
                    <span>custom</span>
                </FlexCenter>
                : <></>
            }
        </SettingHeaderWrapper>
    )
}

export default SettingHeader