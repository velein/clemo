import React from 'react'
import { Button } from '~components/Button'
import { Carousel, CarouselSlides } from '~components/Carousel'
import {
    Description,
    Headline,
    SlideContent,
    StyledCarouselDots,
    StyledCarouselSlide,
} from './styled'

export const CarouselIntro = () => {
    return (
        <Carousel>
            <CarouselSlides>
                <StyledCarouselSlide>
                    <SlideContent>
                        <Headline>
                            we are clemo
                            <span style={{ fontSize: '72px' }}>.</span>
                        </Headline>
                        <Description>
                            professionals
                            <br /> in the creative industries
                        </Description>
                        <Button variant="dark" label="get in touch" />
                    </SlideContent>
                </StyledCarouselSlide>
                <StyledCarouselSlide>
                    <SlideContent>
                        <Headline>hello there</Headline>
                        <Description>general kenobi</Description>
                        <Button variant="dark" label="get in touch" />
                    </SlideContent>
                </StyledCarouselSlide>
                <StyledCarouselSlide>
                    <SlideContent>
                        <Headline>we are clemo 3</Headline>
                        <Description>
                            professionals in the creative industries
                        </Description>
                        <Button variant="dark" label="get in touch" />
                    </SlideContent>
                </StyledCarouselSlide>
            </CarouselSlides>
            <StyledCarouselDots dotSpacing="8px 0" />
        </Carousel>
    )
}
