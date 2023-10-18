import React from 'react'
import SettingItem from './SettingItem';
import { IconWrapper, SettingMenu } from '../General/FlexCenter';
import CheckMark from '../Icons/CheckMark';
import { pageDir, pageName } from './Setting';
import SettingHeader from './SettingHeader';
import { useSpeed, useSpeedCurrent, useVideoRefContext } from '../../contexts/VideoContext';

type settingPlaybackSpeedPropsType = {
    changePage: (newPageName: pageName, dir: pageDir) => void, speedList: number[],
    myRef: React.RefObject<HTMLDivElement>
}

const SettingPlaybackSpeed = ({ changePage, myRef }: settingPlaybackSpeedPropsType) => {

    const { changeSpeed, speedList } = useSpeed();
    const { currentSpeed } = useSpeedCurrent();
    // const changeVideoSpeed = (newSpeed: number) => {
    //     if (!videoRef?.current?.playbackRate) return
    //     videoRef.current.playbackRate = newSpeed;
    //     setCurrentSpeed(newSpeed)
    // }
    // const [currentSpeed, setCurrentSpeed] = useState(1)
    // useEffect(() => {
    //     setCurrentSpeed(videoRef?.current?.playbackRate ? videoRef?.current?.playbackRate : 1)
    // }, [])
    return (
        <>
            <SettingMenu myRef={myRef}>
                <>
                    <SettingHeader
                        title="speed"
                        hasBackButton={true}
                        hasCustomButton={false}
                        changePage={changePage}
                        backRoute={pageName.settingList}
                    />
                    {speedList && speedList.map((speedItem, index) =>
                        <div key={index} onClick={() => changeSpeed(speedItem)}>
                            <SettingItem
                                key={index}
                                startIcon={currentSpeed === speedItem ? <CheckMark /> : <IconWrapper><></></IconWrapper>}
                                content={speedItem} />
                        </div>
                    )}
                </>
            </SettingMenu>
        </>
    )
}

export default SettingPlaybackSpeed