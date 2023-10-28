import React, { useState } from 'react'
import { useCheckScreenSize } from '../../hooks/useCheckScreenSize'
import Dialog from '../Dialog/Dialog'

const RightContainer = () => {
    const { screenSize } = useCheckScreenSize()
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div>{screenSize
            &&
            <div>
                <button
                    onClick={() => setIsModalOpen(pre => !pre)}
                >show Modal
                </button>
                <Dialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quis quibusdam laborum dolore. Vero dolores in eos reiciendis inventore repudiandae facere numquam molestiae at iure doloribus voluptatum excepturi incidunt dolorem mollitia, voluptatem quod officiis expedita sunt esse necessitatibus rem? Quisquam fugiat amet, magnam animi quidem quibusdam a ipsam facilis natus!</p>
                </Dialog>
            </div>
        }</div>
    )
}

export default RightContainer