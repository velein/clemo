import React from 'react'
import { ButtonDark } from '~components/Button'
import { Carousel, CarouselSlides } from '~components/Carousel'

import {
    CarouselIntroContainer,
    CarouselIntroDot,
    CarouselIntroNav,
    CarouselSlide,
    Description,
    Headline,
    SlideContent,
} from './styled'

export const CarouselIntro = () => {
    return (
        <CarouselIntroContainer>
            <CarouselSlides>
                <CarouselSlide>
                    <SlideContent>
                        <Headline>
                            we are clemo
                            <span style={{ fontSize: '72px' }}>.</span>
                        </Headline>
                        <Description>
                            professionals
                            <br /> in the creative industries
                        </Description>
                        <ButtonDark>get in touch</ButtonDark>
                    </SlideContent>
                </CarouselSlide>
                <CarouselSlide>
                    <SlideContent>
                        <Headline>hello there</Headline>
                        <Description>general kenobi</Description>
                        <ButtonDark>get in touch</ButtonDark>
                    </SlideContent>
                </CarouselSlide>
                <CarouselSlide>
                    <SlideContent>
                        <Headline>we are clemo 3</Headline>
                        <Description>
                            professionals in the creative industries
                        </Description>
                        <ButtonDark>get in touch</ButtonDark>
                    </SlideContent>
                </CarouselSlide>
            </CarouselSlides>
            <CarouselIntroNav
                renderItem={(props) => <CarouselIntroDot {...props} />}
            />
        </CarouselIntroContainer>
    )
}
