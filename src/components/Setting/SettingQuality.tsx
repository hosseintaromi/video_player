import React from 'react'
import SettingItem from './SettingItem';
import PlaybackSpeed from '../assets/Icons/PlaybackSpeed';
import { SettingMenu } from '../General/FlexCenter';
import ChangeQuality from '../assets/Icons/ChangeQuality';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';


const SettingList = ({ changePage, myRef }: { changePage: (newPageName: pageName, dir: pageDir) => void, myRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <SettingMenu myRef={myRef}>
            <SettingHeader
                title="speed"
                hasBackButton={true}
                hasCustomButton={false}
                changePage={changePage}
                backRoute={pageName.settingList}
            />
            <div >
                <SettingItem startIcon={<PlaybackSpeed />} content='Playback speed111' />
            </div>
            <div >
                <SettingItem startIcon={<ChangeQuality />} content='ChangeQuality111' />
            </div>
        </SettingMenu>
    )
}

export default SettingList