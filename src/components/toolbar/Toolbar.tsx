import React from 'react';
import { ToolBarPlayIcon } from '../player/VideoPlayerStyle';
import Setting from '../setting/red/Setting';
import Play from '../tools/Play';
import Volume from '../tools/Volume';
import Time from '../tools/Time';
import PictureInPicture from '../tools/PictureInPicture';
import Fullscreen from '../tools/Fullscreen';
import MediaTimeLine from '../timeline/MediaTimeLine';

const Toolbar = ({ isFaded }: { isFaded: boolean }) => {

    return (
        <div className='Toolbar-Wrapper' style={{ opacity: isFaded ? 0 : 1 }}>
            <MediaTimeLine />
            <div className='Setting-Item-Wrapper'>
                <div className='setting-left-section'>
                    <ToolBarPlayIcon>
                        <Play />
                    </ToolBarPlayIcon>
                    <Volume />
                    <div className='time-counter'>
                        <Time type='Current' />
                        <div className='time-divider'>
                            /
                        </div>
                        <Time type='Total' />
                    </div>
                </div>
                <div className='setting-left-section'>
                    <Setting />
                    <PictureInPicture />
                    <Fullscreen />
                </div>
            </div>
        </div>
    )
}

export default Toolbar