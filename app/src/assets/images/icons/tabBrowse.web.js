import React, { forwardRef, memo } from 'react'

const TabBrowseIcon = (props, svgRef) => {
  // eslint-disable-next-line react/prop-types
  const { color } = props

  const SvgImage = () => (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <title>browse default - icon</title>
      <g
        id="Design"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Browse"
          transform="translate(-177.000000, -675.000000)"
          fill={`${color || '#B5C3D6'}`}
          fillRule="nonzero"
        >
          <path
            d="M182.115606,685.168457 C184.663946,685.168457 186.764044,683.060059 186.764044,680.503418 C186.764044,677.963379 184.663946,675.84668 182.115606,675.84668 C179.534063,675.84668 177.442267,677.963379 177.442267,680.503418 C177.442267,683.060059 179.534063,685.168457 182.115606,685.168457 Z M193.886114,685.168457 C196.434454,685.168457 198.534552,683.060059 198.534552,680.503418 C198.534552,677.963379 196.434454,675.84668 193.886114,675.84668 C191.304571,675.84668 189.212774,677.963379 189.212774,680.503418 C189.212774,683.060059 191.304571,685.168457 193.886114,685.168457 Z M182.115606,696.175293 C184.663946,696.175293 186.764044,694.066895 186.764044,691.510254 C186.764044,688.970215 184.663946,686.853516 182.115606,686.853516 C179.534063,686.853516 177.442267,688.970215 177.442267,691.510254 C177.442267,694.066895 179.534063,696.175293 182.115606,696.175293 Z M193.886114,696.175293 C196.434454,696.175293 198.534552,694.066895 198.534552,691.510254 C198.534552,688.970215 196.434454,686.853516 193.886114,686.853516 C191.304571,686.853516 189.212774,688.970215 189.212774,691.510254 C189.212774,694.066895 191.304571,696.175293 193.886114,696.175293 Z"
            id="browse-default---icon"
          />
        </g>
      </g>
    </svg>
  )
  return <SvgImage />
}

const ForwardRef = forwardRef(TabBrowseIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
