import styled from '@emotion/styled'
import { CarouselNav } from '~components/Carousel'
import { Dot } from '~components/Dot'
// import { CarouselDots, CarouselSlide } from '~components/Carousel'

export const Headline = styled.h2`
    position: relative;
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
    margin: 0;
    padding: 0 0 20px;
    margin: 0 0 20px;

    &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 55px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #000000;
    }
`
export const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    margin: 0 0 60px;
`

export const SlideContent = styled.div`
    text-align: center;
    max-width: 500px;
`

export const CarouselSlide = styled.div`
    background-color: #ffe1bd;
    height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CarouselIntroNav = styled(CarouselNav)`
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
`

export const CarouselIntroDot = styled(Dot)`
    :not(:last-of-type) {
        margin-bottom: 15px;
    }
`
