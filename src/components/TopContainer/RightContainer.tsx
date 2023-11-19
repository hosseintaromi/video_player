import React, { useState } from 'react'
import { useCheckScreenSize } from '../../hooks/useCheckScreenSize'

const RightContainer = () => {
    const { screenSize } = useCheckScreenSize()
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div></div>
    )
}

export default RightContainer