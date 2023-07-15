import React from 'react'
import env from '@/env'

const _index = () => {
  return (
    <div>{env.NEXT_PUBLIC_GEOCODE_API_KEY}</div>
  )
}

export default _index