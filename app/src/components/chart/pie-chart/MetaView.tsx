import React from 'react'

import { ChartData } from '../types'
import { Text, Box } from '../../core'

import { Dot } from './styles'

/**
 * `<MetaView>`
 */
export const MetaView: React.FC<ChartData> = ({
  value,
  label,
  color,
  ...rest
}) => {
  return (
    <Box flexDirection="row">
      <Dot size={8} background={color} />

      <Box ml="xxs">
        <Text fontSize="value">{value}</Text>
        <Text fontSize="body2" color="textGray">
          {label}
        </Text>
      </Box>
    </Box>
  )
}
