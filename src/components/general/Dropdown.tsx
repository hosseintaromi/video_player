import React, { HTMLAttributes, useState } from 'react';
type DropdownOption = {
    value: string,
    text: string
}
type DropdownType = {
    options: DropdownOption[],
    value?: string,
    onSelect?: (value: string) => void
}

const Dropdown = ({ options, value, onSelect, className }: DropdownType & HTMLAttributes<HTMLElement>
) => {
    const defaultOption: DropdownOption = {
        value: "",
        text: "انتخاب کنید"
    }

    const [val, setVal] = useState<DropdownOption>(
        value ? options.find(x => x.value === value) || defaultOption : defaultOption
    )

    const [open, setOpen] = useState<boolean>(false)

    const selectOption = (option: DropdownOption) => {
        setVal(option);
        setOpen(false);
        onSelect?.(option.value);
    }

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className={`dropdown-wrapper` + className}>
            <div className='dropdown-input' onClick={toggleOpen}>{val.text}</div>
            {
                open &&
                <ul className='dropdown-list'>
                    {options.map(option =>
                        (<li className='dropdown-list-item' key={option.value} onClick={() => selectOption(option)}>{option.text}</li>)
                    )}
                </ul>
            }
        </div>
    )
}
export default Dropdown;