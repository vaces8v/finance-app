import * as React from "react"
import {SVGProps} from "react"

const LogoSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={27}
        height={29}
        fill="none"
        {...props}
    >
        <path
            fill="#FFC01E"
            fillRule="evenodd"
            d="m21.172 5.617-11.51.072L9.63.806 26.025.703l.103 16.394-4.883.03-.073-11.51Z"
            clipRule="evenodd"
        />
        <path
            fill="#1FCB4F"
            fillRule="evenodd"
            d="M12.242 15.39a4.536 4.536 0 0 0-2.524-.748L9.687 9.76a9.418 9.418 0 1 1-9.359 9.477l4.884-.03a4.535 4.535 0 1 0 7.03-3.815Z"
            clipRule="evenodd"
        />
    </svg>
)
export default LogoSvg
