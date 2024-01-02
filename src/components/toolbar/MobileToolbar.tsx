import React, { useState } from 'react';
import { IconButton, MobileSettingPlay, MobileToolbarWrapper, MobileTopToolbar, SettingItemWrapper, SettingLeftSection, SettingRightSection, TimeCounter } from '../toolbar/ToolbarStyle';
import { ToolBarPlayIcon } from '../player/VideoPlayerStyle';
import Play from '../tools/Play';
import Time from '../tools/Time';
import Fullscreen from '../tools/Fullscreen';
import MediaTimeLine from '../timeline/MediaTimeLine';
import Switch from '../general/Switch';
import Dialog from '../general/Dialog';
import Icon from '../icons/Icon';
import Dropdown from '../general/Dropdown';
import SettingItem from '../setting/red/SettingItem';
import Locale from '../locale/Locale';

const MobileToolbar = ({ isFaded }: { isFaded: boolean }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const DropdownList = [
        {
            value: '1',
            text: 'سلام'
        },
        {
            value: '2',
            text: 'یک'
        },
        {
            value: '3',
            text: 'دو'
        },
        {
            value: '4',
            text: 'سوال'
        }
    ]
    return (
        <div className='mobile-toolbar-wrapper' style={{ opacity: isFaded ? 0 : 1 }}>
            <div className='mobile-top-toolbar'>
                <Dialog onClose={() => { setIsOpen(false) }} isOpen={isOpen} >
                    <div className='dialog-title'>تنظیمات</div>
                    <SettingItem className='dialog-item' startIcon={<Icon isClickable={true} type='speed' />} text={<Locale localeKey="setting_menu_change_speed_title" />} >
                        <Switch />
                    </SettingItem>
                    <div className='dialog-label'>کیفیت</div>
                    <Dropdown className='dialog-dropdown' options={DropdownList} />
                    <div className='dialog-label'>سرعت</div>
                    <Dropdown className='dialog-dropdown' options={DropdownList} />
                </Dialog>
                <Switch hasIcon={true} />
                <IconButton onClick={() => {
                    setIsOpen(true)
                }}>
                    <Icon isClickable type='setting' />
                </IconButton>
            </div>
            <div className='mobile-setting-play'>
                <div className='toolbar-play-icon'>
                    <Play />
                </div>
            </div>
            <MediaTimeLine />
            <div className='setting-item-wrapper'>
                <div className='setting-left-section'>
                    <div className='time-counter'>
                        <Time type='Current' />
                        /
                    </div>
                    <Time type='Total' />
                </div>
                <div className='setting-right-section'>
                    <Fullscreen />
                </div>
            </div>
        </div>
    )
}

export default MobileToolbar