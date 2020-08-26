import React, { Dispatch, SetStateAction, useState } from 'react'
import { Arrows } from './components/Arrows'
import { Slides } from './components/Slides'

type SliderProps = {
    children: React.ReactNodeArray
}

type SliderContextType = {
    currentSlide: number
    setCurrentSlide: Dispatch<SetStateAction<number>>
}

export const SliderContext = React.createContext({} as SliderContextType)

export const Slider: React.FC<SliderProps> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const value: SliderContextType = {
        currentSlide,
        setCurrentSlide,
    }

    return (
        <SliderContext.Provider value={value}>
            <h2> Single Item</h2>
            <Slides>{children}</Slides>
            <Arrows />
        </SliderContext.Provider>
    )
}
