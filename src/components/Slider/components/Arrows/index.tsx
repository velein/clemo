import React, { useContext } from 'react'
import { SliderContext } from '~components/Slider'

export const Arrows: React.FC = () => {
    const { currentSlide, setCurrentSlide } = useContext(SliderContext)

    return (
        <div>
            <button onClick={() => setCurrentSlide(currentSlide - 1)}>
                Previous
            </button>
            <button onClick={() => setCurrentSlide(currentSlide + 1)}>
                Next
            </button>
        </div>
    )
}
