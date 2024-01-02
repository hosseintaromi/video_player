import React, { ReactNode } from 'react';

type BadgePropsType = {
    children: ReactNode,
    isFixed?: boolean,
    colors?: "primary" | "danger" | "info" | "warning" | "success"
}

const Badge = ({ children, isFixed, colors }: BadgePropsType) => {

    return (
        <span className={`badge-wrapper ${!colors ? 'badge-primary' : 'badge-'+ colors} ${isFixed ? 'badge-fixed' : ''}`}>
            {children}
        </span>

    )
}
export default Badge;