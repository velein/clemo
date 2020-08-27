import React, { useContext } from 'react'
import { CarouselContext } from '~components/Carousel'

export const Arrows: React.FC = () => {
    const { handleChange } = useContext(CarouselContext)

    return (
        <div>
            <button onClick={() => handleChange('previous')}>Previous</button>
            <button onClick={() => handleChange('next')}>Next</button>
        </div>
    )
}
