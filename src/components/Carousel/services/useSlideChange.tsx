import { useState } from 'react'

export type HandleSlideChange = (
    type: 'next' | 'previous' | 'index',
    index?: number,
) => void

export const useSlideChange = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

    const handleSlideChange: HandleSlideChange = (type, index) => {
        switch (type) {
            case 'next':
                setActiveSlideIndex(activeSlideIndex + 1)
                break
            case 'previous':
                setActiveSlideIndex(activeSlideIndex - 1)
                break
            case 'index':
                if (index !== undefined) {
                    setActiveSlideIndex(index)
                }
                break
        }
    }

    return { activeSlideIndex, handleSlideChange }
}
