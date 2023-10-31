import React from 'react'
import bg from '../assets/img.png'
import { useDrop } from 'react-dnd'

const Bin = ({binnedItems}) => {
    const [{canDrop, isOver}, drop] = useDrop(() => ({
        accept:'note',
        drop: () => ({name: "the bin"}), 
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        })
    }), [],)
    return (
        <div>
            <div className='flex items-center justify-center mt-4 perspective ' ref={drop}>
                <img src={bg} alt="" className='w-96 h-96 hover:transform hover:rotate-left-right hover:scale-105 transition-transform duration-700' />
                {binnedItems.map((item, i) => 
                <div key={i}>
                    <p>{item}</p>
                </div>
                
                )}
            </div>
        </div>
    )
}

export default Bin