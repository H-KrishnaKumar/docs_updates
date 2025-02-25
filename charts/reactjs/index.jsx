import React from 'react'
import {render} from 'react-dom'
import FpSdk from 'forepaas/sdk'

import './styles/styles.less'

import Loader from './Loader.jsx'

FpSdk.start()
  .then(() => {
    render(<Loader />, document.getElementById('root'))
  })
