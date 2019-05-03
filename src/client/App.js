import React from 'react'
import { HelloWorld } from './components/HelloWorld'
import { getMessage } from './services/api'

export const App = () => (
  <>
    <HelloWorld {...{ getMessage }} />
  </>
)
