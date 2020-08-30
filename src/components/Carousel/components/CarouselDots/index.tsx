import React, { useContext, useEffect, useState } from 'react'
import { CarouselContext } from '~components/Carousel'
import { Dot, DotsWrapper } from './styled'

export type DotStyledProps = {
    active: boolean
}

type CarouselDotsProps = {
    dotSpacing?: string
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
    dotSpacing = '4px',
    ...props
}) => {
    const [dotsCount, setDotsCount] = useState<number[]>([])

    const { slidesMaxIndex, handleSlideChange, activeSlideIndex } = useContext(
        CarouselContext,
    )

    useEffect(() => {
        if (!dotsCount.length) {
            setDotsCount([...Array(slidesMaxIndex).keys()])
        }
    }, [dotsCount.length, slidesMaxIndex])

    return (
        <DotsWrapper {...props}>
            {dotsCount.map((slide, index) => {
                return (
                    <Dot
                        key={index}
                        aria-label={`go to slide ${index}`}
                        active={activeSlideIndex === index}
                        onClick={() => handleSlideChange('index', index)}
                        style={{ margin: dotSpacing }}
                    />
                )
            })}
        </DotsWrapper>
    )
}
