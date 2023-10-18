import React from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../General/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import CheckMark from '../Icons/CheckMark';
import { useAudioTrack, useAudioTrackCurrent } from '../../contexts/VideoContext';

type SettingAudioTrackType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>,
}

const SettingAudioTrack = ({ changePage, myRef }: SettingAudioTrackType) => {
    const { audioTrackList, changeHlsAudioTrack } = useAudioTrack();
    const { currentAudioTrack } = useAudioTrackCurrent()

    const audioTrackListGenerator = () => {
        return audioTrackList.map((item, index) =>
            <SettingItem
                key={index}
                onClick={() => changeHlsAudioTrack(index)}
                startIcon={currentAudioTrack === index ? < CheckMark /> : null}
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
                {audioTrackListGenerator()}
            </div>

        </SettingMenu>
    )
}

export default SettingAudioTrack