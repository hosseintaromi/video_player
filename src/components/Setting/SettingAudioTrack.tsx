import React from 'react'
import SettingItem from './SettingItem';
import { SettingMenu } from '../General/FlexCenter';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import CheckMark from '../assets/Icons/CheckMark';
import { audioTrackObjType } from '../../@types/hooks/UseVideoHlsType';

type SettingAudioTrackType = {
    changePage: (newPageName: pageName, dir: pageDir) => void,
    myRef: React.RefObject<HTMLDivElement>,
    audioTrack: audioTrackObjType
}

const SettingAudioTrack = ({ changePage, myRef, audioTrack }: SettingAudioTrackType) => {

    const audioTrackListGenerator = () => {
        return audioTrack.audioTrackList.map((item, index) =>
            <SettingItem
                key={index}
                onClick={() => audioTrack.changeHlsAudioTrack(index)}
                startIcon={audioTrack.currentAudioTrack === index ? < CheckMark /> : null}
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