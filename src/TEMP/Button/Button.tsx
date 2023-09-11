import React from 'react'
import './Button.css'
interface ButtonProps {
    /**
     * label for the
     */
    label: string
}

const Button = ({ label = 'heeloo' }: ButtonProps) => {
    return (
        <button>{label}</button>
    )
}


export default Button;