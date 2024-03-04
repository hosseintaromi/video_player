import React, { useState } from 'react'
import { usePlayerContext } from '../../hooks/usePlayerContext'

const Loading = () => {
    const [showLoading, setShowLoading] = useState<boolean>()
    usePlayerContext({
        onLoading: (isLoading: boolean) => {
            setShowLoading(isLoading)
        }
    })
    return (
        showLoading ? <div className='ring-wrapper'><div></div><div></div><div></div><div></div></div> : <></>
    )
}

export default Loading