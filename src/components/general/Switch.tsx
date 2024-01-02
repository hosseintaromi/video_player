import React, { useState } from 'react';
import Icon from '../icons/Icon';

const Switch = ({ hasIcon }: { hasIcon?: boolean }) => {
    const [autoPlay, setAutoPlay] = useState<boolean>(true);
    const [active, setActive] = useState<boolean>(true);

    const togglePlay = () => {
        setAutoPlay(!autoPlay);
    }

    const toggleButton = () => {
        setActive(!active);
    }

    return (
        <>
            {
                hasIcon ? <button className='switch-button' onClick={togglePlay}>
                    <div className='spanner'>
                        <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                            <rect x="1" width="34" height="14" rx="7" fill="white" fillOpacity="0.5"></rect>
                        </svg>
                    </div>
                    {
                        autoPlay === true ?
                            <div className='pause-spanner'>
                                <Icon isClickable={true} type='autoPlayOn' />
                            </div>
                            :
                            <div className='play-spanner'>
                                <Icon isClickable={true} onClick={togglePlay} type='autoPlayOff' />
                            </div>
                    }
                </button> : <button className='toggle-button' onClick={toggleButton}>
                    <div className='button-track'></div>
                    <div className='button-circle' style={active ? {
                        transform: "translateX(20px)",
                        backgroundColor: "#065fd4"
                    } : {}}></div>
                </button>
            }
        </>

    )
}
export default Switch;