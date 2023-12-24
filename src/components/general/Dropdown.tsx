import styled from '@emotion/styled';
import React, { useState } from 'react';
type DropdownOption = {
    value: string,
    text: string
}
type DropdownType = {
    options: DropdownOption[],
    value?: string,
    onSelect?: (value: string) => void
}

const DropdownWrapper = styled.div(({ theme }) => ({
    position: "relative",
    width: "100%",
    padding: "16px",
    direction: theme.dir
}));

const DropdownInput = styled.div(({ theme }) => ({
    cursor: "pointer",
    border: `1px solid ${theme.iconColor}33`,
    padding: "4px 8px",
    height: "36px",
}));

const DropdownList = styled.ul(({ theme })=>({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "absolute",
    zIndex: 10,
    left: "16px",
    right: "16px",
    bottom: "62px",
    background: theme.settingBg
}));

const DropdownListItem = styled.li(({ theme })=>({
    padding: "4px 8px"
}));

const Dropdown = ({ options, value, onSelect }: DropdownType) => {
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
        <DropdownWrapper>
            <DropdownInput onClick={toggleOpen}>{val.text}</DropdownInput>
            {
                open &&
                <DropdownList>
                    {options.map(option =>
                        (<DropdownListItem key={option.value} onClick={() => selectOption(option)}>{option.text}</DropdownListItem>)
                    )}
                </DropdownList>
            }
        </DropdownWrapper>
    )
}
export default Dropdown;