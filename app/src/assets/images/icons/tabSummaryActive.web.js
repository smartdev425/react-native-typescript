import React, { forwardRef, memo } from 'react'

function TabSummaryActiveIcon(props, svgRef) {
  // eslint-disable-next-line react/prop-types
  const { color } = props

  const SvgImage = () => (
    <svg
      width="22px"
      height="20px"
      viewBox="0 0 22 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <title>summary active - icon</title>
      <defs>
        <linearGradient
          x1="37.6916726%"
          y1="28.1950257%"
          x2="55.5489063%"
          y2="59.1702987%"
          id="linearGradient-1"
        >
          <stop stopColor={`${color || '#FF7F40'}`} offset="0%" />
          <stop stopColor={`${color || '#F44C7F'}`} offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Design"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Browse"
          transform="translate(-81.000000, -673.000000)"
          fill="url(#linearGradient-1)"
          fillRule="nonzero"
        >
          <path
            d="M91.9884091,692.984375 C92.1959286,692.984375 92.486456,692.851562 92.6939755,692.71875 C98.6290341,688.89209 102.497198,684.476074 102.497198,679.96875 C102.497198,676.266602 99.9488583,673.626953 96.620245,673.626953 C94.5865536,673.626953 92.9263974,674.772461 91.9884091,676.532227 C91.0587216,674.780762 89.3985653,673.626953 87.3565732,673.626953 C84.0279599,673.626953 81.47962,676.266602 81.47962,679.96875 C81.47962,684.476074 85.3477841,688.89209 91.2911435,692.71875 C91.498663,692.851562 91.7891903,692.984375 91.9884091,692.984375 Z"
            id="summary-active---icon"
          />
        </g>
      </g>
    </svg>
  )

  return <SvgImage />
}

const ForwardRef = forwardRef(TabSummaryActiveIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
