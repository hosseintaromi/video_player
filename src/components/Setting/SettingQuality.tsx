import React from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../General/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import CheckMark from '../Icons/CheckMark';
import { useLevel, useLevelCurrent } from '../../contexts/VideoContext';

type SettingQualityType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>,
}

const SettingQuality = ({ changePage, myRef }: SettingQualityType) => {

    const { changeHlsLevel, levels } = useLevel()
    const { currentLevel } = useLevelCurrent()

    const qualityListGenerator = () => {
        return levels.map((item, index) =>
            <SettingItem
                key={index}
                onClick={() => changeHlsLevel(index)}
                startIcon={currentLevel === index ? < CheckMark /> : null}
                content={item.height}
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
                    onClick={() => changeHlsLevel(-1)}
                    startIcon={currentLevel === -1 ? < CheckMark /> : null}
                    content='auto'
                />
                {qualityListGenerator()}
            </div>

        </SettingMenu>
    )
}

export default SettingQuality