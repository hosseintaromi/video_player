import React from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../General/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import CheckMark from '../assets/Icons/CheckMark';
import { subtitleObjType } from '../../@types/hooks/UseVideoHlsType';
import { useSubtitle, useSubtitleCurrent } from '../../contexts/VideoContext';

type SettingSubtitleType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>,
}

const SettingSubtitle = ({ changePage, myRef }: SettingSubtitleType) => {

    const { changeHlsSubtitle, subtitleList } = useSubtitle();
    const { currentSubtitle } = useSubtitleCurrent();

    const subtitleListGenerator = () => {
        return subtitleList.map((item, index) =>
            <SettingItem
                key={index}
                onClick={() => changeHlsSubtitle(index)}
                startIcon={currentSubtitle === index ? < CheckMark /> : null}
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
                    onClick={() => changeHlsSubtitle}
                    startIcon={currentSubtitle === -1 ? < CheckMark /> : null}
                    content='off'
                />
                {subtitleListGenerator()}
            </div>

        </SettingMenu>
    )
}

export default SettingSubtitle