import React from 'react'
import { ReactComponent as ArrowIcon } from './arrow.svg'

type IconProps = {
    icon: 'arrow'
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
    console.log('ai', ArrowIcon)
    switch (icon) {
        case 'arrow':
            // return <ArrowIcon />
            return null
        default:
            return null
    }
}
