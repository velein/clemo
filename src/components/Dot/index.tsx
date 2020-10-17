import styled from '@emotion/styled'
import { Button } from '~components/Button'

export const Dot = styled(Button)`
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1px solid #000;
    background: transparent;

    &:hover {
        background-color: #000;
    }
`
