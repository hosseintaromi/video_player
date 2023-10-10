import React from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../General/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import CheckMark from '../assets/Icons/CheckMark';
import { subtitleObjType } from '../../@types/hooks/UseVideoHlsType';

type SettingSubtitleType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>,
    subtitle: subtitleObjType
}

const SettingSubtitle = ({ changePage, myRef, subtitle }: SettingSubtitleType) => {

    const qualityListGenerator = () => {
        return subtitle.subtitleList.map((item, index) =>
            <SettingItem
                key={index}
                onClick={() => subtitle.changeHlsSubtitle(index)}
                startIcon={subtitle.currentSubtitle === index ? < CheckMark /> : null}
                content={item.name}
            />
        )
    }
    return (
        <SettingMenu myRef={myRef}>
            <SettingHeader
                title="speed"
                hasBackButton={true}
                hasCustomButton={false}
                changePage={changePage}
                backRoute={pageName.settingList}
            />
            <div>
                <SettingItem
                    onClick={() => subtitle.changeHlsSubtitle}
                    startIcon={subtitle.currentSubtitle === -1 ? < CheckMark /> : null}
                    content='off'
                />
                {qualityListGenerator()}
            </div>

        </SettingMenu>
    )
}

export default SettingSubtitle