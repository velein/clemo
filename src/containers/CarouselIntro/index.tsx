import React from 'react'
import { ButtonDark } from '~components/Button'
import { Carousel, CarouselNav, CarouselSlides } from '~components/Carousel'
import { Dot } from '~components/Dot'

import { Description, Headline, Slide, SlideContent } from './styled'

// TODO: Add styles and navigation
export const CarouselIntro = () => {
    return (
        <Carousel>
            <CarouselSlides>
                <Slide>
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
                </Slide>
                <Slide>
                    <SlideContent>
                        <Headline>hello there</Headline>
                        <Description>general kenobi</Description>
                        <ButtonDark>get in touch</ButtonDark>
                    </SlideContent>
                </Slide>
                <Slide>
                    <SlideContent>
                        <Headline>we are clemo 3</Headline>
                        <Description>
                            professionals in the creative industries
                        </Description>
                        <ButtonDark>get in touch</ButtonDark>
                    </SlideContent>
                </Slide>
            </CarouselSlides>
            <CarouselNav renderItem={(props) => <Dot {...props} />} />
        </Carousel>
    )
}
