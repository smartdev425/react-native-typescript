import React from 'react'

import { centered, themeColorControl } from '~/storybook-utils'

import { LineChart } from './LineChart'

export default {
  title: 'Components/Charts/LineChart',
  component: LineChart,
  argTypes: {
    strokeColor: themeColorControl,
    gridColor: themeColorControl,
    activeGridColor: themeColorControl,
  },
  args: {
    title: 'Average Rent',
    strokeWidth: 2,
    strokeColor: 'brandPink',
    gridColor: 'lightGray',
    activeGridColor: 'brandPink',
    activeGridIndex: 3,
    values: [
      { value: 100, label: 'J' },
      { value: 120, label: 'F' },
      { value: 120, label: 'M' },
      { value: 130, label: 'A' },
      { value: 140, label: 'M' },
      { value: 110, label: 'J' },
      { value: 120, label: 'J' },
      { value: 130, label: 'A' },
      { value: 140, label: 'S' },
      { value: 150, label: 'O' },
      { value: 110, label: 'N' },
      { value: 100, label: 'D' },
    ],
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
}

// The first export will be used as the main story on the page.
export const Template = (props) => <LineChart {...props} />
Template.storyName = 'LineChart'
Template.decorators = [centered]
Template.parameters = {
  // Open the source code for the first story
  docs: { source: { state: 'open' } },
}

// If your component has multiple variations, please export
// additional stories that show those variations specifically.
