import React, { useState } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'

const loading = () => {
    const [showLoading, setShowLoading] = useState<boolean>()
    usePlayerContext({
        onLoading: (isLoading: boolean) => {
            console.log(isLoading);
            setShowLoading(isLoading)
        }
    })
    return (
        showLoading && <div>loading</div>
    )
}

export default loading