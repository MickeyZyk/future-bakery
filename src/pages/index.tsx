import React from 'react'
import { Redirect } from '@reach/router'

const IndexPage = props => (
  <Redirect to='/bakery' noThrow />
)

export default IndexPage