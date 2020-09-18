import styled from '@emotion/styled'

export const Grid = styled.div`
    width: 100%;
`

export const GridItemImage = styled.img`
    grid-area: image;
    width: 100%;
`

export const GridItemArticle = styled.article`
    grid-area: article;
    font-size: 18px;

    font-weight: 300;

    &:nth-of-type(even) {
        padding: 0 40px 0 0;
    }

    &:nth-of-type(odd) {
        padding: 0 40px 0 0;
    }

    p {
        line-height: 1.35;
        margin: 0 0 30px;
    }
`

export const GridItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    margin: 0 0 60px;

    &:nth-of-type(even) {
        grid-template-areas: 'image article';
    }

    &:nth-of-type(odd) {
        grid-template-areas: 'article image';
    }
`

export const ServiceCategory = styled.h3`
    font-size: 22px;
    font-weight: 300;
    margin: 0;
`

export const ServiceHeading = styled.h2`
    padding: 0 0 20px;
    margin: 0 0 20px;
    font-size: 40px;
    font-weight: 700;
    position: relative;

    &::after {
        content: '';
        width: 50px;
        height: 3px;
        background-color: #000000;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`
