import React from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../General/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import CheckMark from '../assets/Icons/CheckMark';
import { qualityObjType } from '../../@types/hooks/UseVideoHlsType';

type SettingQualityType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>,
    quality: qualityObjType
}

const SettingQuality = ({ changePage, myRef, quality }: SettingQualityType) => {

    const qualityListGenerator = () => {
        return quality.qualityList.map((item, index) =>
            <SettingItem
                key={index}
                onClick={() => quality.changeHlsLevel(index)}
                startIcon={quality.currentQuality === index ? < CheckMark /> : null}
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
                    onClick={() => quality.changeHlsLevel(-1)}
                    startIcon={quality.currentQuality === -1 ? < CheckMark /> : null}
                    content='auto'
                />
                {qualityListGenerator()}
            </div>

        </SettingMenu>
    )
}

export default SettingQuality