import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { HeaderBar } from './HeaderBar'

// Component Native Stories
storiesOf('HeaderBar', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => <HeaderBar title="Property Leaderboard" />)
