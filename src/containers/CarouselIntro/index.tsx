import React from 'react'
import { Button } from '~components/Button'
import { Carousel, CarouselSlides } from '~components/Carousel'
import { Description, Headline, SlideContent } from './styled'

// TODO: Add styles and navigation
export const CarouselIntro = () => {
    return (
        <Carousel>
            <CarouselSlides>
                <div>
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
                </div>
                <div>
                    <SlideContent>
                        <Headline>hello there</Headline>
                        <Description>general kenobi</Description>
                        <Button variant="dark" label="get in touch" />
                    </SlideContent>
                </div>
                <div>
                    <SlideContent>
                        <Headline>we are clemo 3</Headline>
                        <Description>
                            professionals in the creative industries
                        </Description>
                        <Button variant="dark" label="get in touch" />
                    </SlideContent>
                </div>
            </CarouselSlides>
        </Carousel>
    )
}
