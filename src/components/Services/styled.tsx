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

    font-weight: 300;

    p {
        font-size: 18px;
        line-height: 1.35;
        margin: 0 0 30px;
    }
`

export const GridItem = styled.div`
    display: grid;
    grid-column-gap: 100px;
    margin: 0 0 100px;

    &:nth-of-type(odd) {
        grid-template-columns: 50% auto;
        grid-template-areas: 'image article';
    }

    &:nth-of-type(even) {
        grid-template-columns: auto 50%;
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
