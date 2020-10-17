import styled from '@emotion/styled'
import { Button, buttonTransition } from '~components/Button'

export const ButtonGhost = styled(Button)`
    background-color: #ffffff;
    border-radius: 25px;
    font-size: 18px;
    padding: 16px 32px;

    ${buttonTransition}

    border: 1px solid #d8d8d8;
    color: #000000;

    &:hover {
        border: 1px solid #000000;
    }
`
