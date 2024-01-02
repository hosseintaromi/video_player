import React, { useEffect, useState } from 'react'
import Icon from '../../icons/Icon'
import { useVideo } from '../../../hooks/useVideo'
import { LevelType } from '../../../@types/UseVideoHlsType.model'
import Dialog from '../../general/Dialog'
import { DialogTitle } from '../../general/DialogStyle'
import Locale from '../../locale/Locale'
import { SettingItemIcon, SettingItemSpan, SettingMenuItem } from '../red/SettingStyle'
import { CenterBox } from '../../general/FlexCenter'
import { IconButton } from '../../toolbar/ToolbarStyle'
import Badge from '../../general/Badge'

const Quality = () => {
    const [levels, setLevels] = useState<LevelType>()
    const [currentLevel, setCurrentLevel] = useState<number>()
    const loadLevels = () => {
        setLevels(getLevels())
        const curlvl = getCurrentLevel().isAuto ? -1 : getCurrentLevel().currentLevel
        setCurrentLevel(curlvl === undefined ? -1 : curlvl)
    }
    const { getLevels, changeLevel, getCurrentLevel } = useVideo({ onLoaded: loadLevels })
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
                <div className='dialog-title'>کیفیت پخش</div>
                {levels?.map((item, index) => (
                    <div
                        onClick={() => setQuality(index)}
                        className={`setting-menu-item is-reversed ${currentLevel === index ? 'active' : ''}`} key={index + 'speedDialog'}
                    >
                        <div className='center-box'>
                            <div className='setting-item-icon reversed-icon' style={{ display: currentLevel === index ? 'flex' : 'none' }}>
                                <Icon isClickable={true} type='checkMark' />
                            </div>
                            <div className='setting-item-span reserved-span'>
                                {item.height}
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    onClick={() => setQuality(-1)}
                    className={`setting-menu-item is-reversed ${currentLevel === -1 ? 'active' : ''}`} key={-1 + 'speedDialog'}
                >
                    <div className='center-box'>
                        <div className='setting-item-icon reversed-icon' style={{ display: currentLevel === -1 ? 'flex' : 'none' }}>
                            <Icon isClickable={true} type='checkMark' />
                        </div>
                        <div className='setting-item-span reserved-span'>
                            <Locale localeKey="setting_menu_quality_list_item_auto" />
                        </div>
                    </div>
                </div>
            </Dialog>
            <button className='icon-button' onClick={() => setIsOpen(pre => !pre)}>
                <Icon isClickable={true} type="setting" />
                <Badge colors='danger' isFixed>
                    12.2
                </Badge>
            </button>

        </>
    )
}

export default Quality