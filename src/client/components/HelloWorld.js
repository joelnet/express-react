import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

export const HelloWorld = ({ getMessage }) => {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    getMessage()
      .then(setMessage)
      .catch(setMessage)
  }, [])

  return <div>{message}!</div>
}

HelloWorld.propTypes = {
  getMessage: propTypes.func.isRequired
}
