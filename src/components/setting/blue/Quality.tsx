import React, { useEffect, useState } from 'react'
import Icon from '../../icons/Icon'
import { usePlayerEvents } from '../../../hooks/usePlayerEvents'
import { LevelType } from '../../../@types/UseVideoHlsType.model'
import Dialog from '../../general/Dialog'
import Locale from '../../locale/Locale'

const Quality = () => {
    const [levels, setLevels] = useState<LevelType>()
    const [currentLevel, setCurrentLevel] = useState<number>()
    const loadLevels = () => {
        console.log('first')
        setLevels(getLevels())
        const curlvl = getCurrentLevel().isAuto ? -1 : getCurrentLevel().currentLevel
        setCurrentLevel(curlvl === undefined ? -1 : curlvl)
    }
    const { getLevels, changeLevel, getCurrentLevel } = usePlayerEvents({ onLoaded: loadLevels })
    useEffect(() => {
        loadLevels()
    }, [])

    const setQuality = (index: number) => {
        changeLevel(index)
        setCurrentLevel(index)
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <Dialog onClose={() => { setIsOpen(false) }} isOpen={isOpen} >
                <div className='center-box dialog-title'>کیفیت پخش</div>
                {levels?.map((item, index) => (
                    <div
                        onClick={() => { setQuality(index); setIsOpen(pre => !pre) }}
                        className={`center-box setting-menu-item is-reversed ${currentLevel === index ? 'active' : ''}`} key={index + 'qualityDialog'}
                    >
                        <div className='center-box'>
                            <div className='setting-item-icon' style={{ display: currentLevel === index ? 'flex' : 'none' }}>
                                <Icon isClickable={true} type='checkMark' />
                            </div>
                            <span className='setting-item-span'>
                                {item.height}
                            </span>
                        </div>
                    </div>
                ))}
                <div
                    onClick={() => { setQuality(-1); setIsOpen(pre => !pre) }}
                    className={`center-box setting-menu-item is-reversed ${currentLevel === -1 ? 'active' : ''}`} key={-1 + 'speedDialog'}
                >
                    <div className='center-box'>
                        <div className='setting-item-icon' style={{ display: currentLevel === -1 ? 'flex' : 'none' }}>
                            <Icon isClickable={true} type='checkMark' />
                        </div>
                        <span className='setting-item-span'>
                            <Locale localeKey="setting_menu_quality_list_item_auto" />
                        </span>
                    </div>
                </div>
            </Dialog>
            <button className='center-box setting-icon-button' onClick={() => setIsOpen(pre => !pre)}>
                <Icon isClickable={true} type="setting" />
                {/* <Badge colors='danger' isFixed>
                    12.2
                </Badge> */}
            </button>

        </>
    )
}

export default Quality