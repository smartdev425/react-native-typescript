import React, { forwardRef, memo } from 'react'
import { SvgXml } from 'react-native-svg'

function TabSummaryIcon(props, svgRef) {
  // eslint-disable-next-line react/prop-types
  const { color } = props

  const svgMarkup = `<svg width="22px" height="20px" viewBox="0 0 22 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>summary default - icon</title>
    <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Browse" transform="translate(-81.000000, -736.000000)" fill="${
          color || '#B5C3D6'
        }" fill-rule="nonzero">
            <path d="M91.9884091,755.984375 C92.1959286,755.984375 92.486456,755.851562 92.6939755,755.71875 C98.6290341,751.89209 102.497198,747.476074 102.497198,742.96875 C102.497198,739.266602 99.9488583,736.626953 96.620245,736.626953 C94.5865536,736.626953 92.9263974,737.772461 91.9884091,739.532227 C91.0587216,737.780762 89.3985653,736.626953 87.3565732,736.626953 C84.0279599,736.626953 81.47962,739.266602 81.47962,742.96875 C81.47962,747.476074 85.3477841,751.89209 91.2911435,755.71875 C91.498663,755.851562 91.7891903,755.984375 91.9884091,755.984375 Z" id="summary-default---icon"></path>
        </g>
    </g>
  </svg>`

  const SvgImage = () => <SvgXml xml={svgMarkup} ref={svgRef} {...props} />

  return <SvgImage />
}

const ForwardRef = forwardRef(TabSummaryIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
