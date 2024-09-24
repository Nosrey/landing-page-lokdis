import React from 'react'
import { Bloque1 } from '../Bloque-1/Bloque1'
import { Bloque3 } from '../Bloque-3/Bloque3'

export const Homepage = () => {
  return (
    <div>
      <Bloque1 />
      <p>Bloque 2</p>
      <hr />
      <Bloque3 />
    </div>
  )
}
