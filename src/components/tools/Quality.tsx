import React, { useEffect, useState } from 'react'
import Icon from '../icons/Icon'
import { useVideo } from '../../hooks/useVideo'
import { LevelType } from '../../@types/UseVideoHlsType.model'
import Dialog from '../general/Dialog'
import { DialogTitle } from '../general/DialogStyle'
import Locale from '../locale/Locale'

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
                <DialogTitle>تنظیمات</DialogTitle>
                {levels?.map((item, index) => (
                    <button onClick={() => setQuality(index)} style={{ backgroundColor: currentLevel === index ? 'red' : 'blue' }} key={index + 'speedDialog'} >
                        {item.name}
                    </button>
                ))}
                <button onClick={() => setQuality(-1)}>
                    <Locale localeKey="setting_menu_quality_list_item_auto" />
                </button>
            </Dialog>
            <Icon onClick={() => setIsOpen(pre => !pre)} isClickable={true} type="quality" />

        </>
    )
}

export default Quality