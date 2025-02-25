import React from 'react'
import FpChart from 'forepaas/chart'
import FpSdk from 'forepaas/sdk'
import { Provider } from 'react-redux'

class Loader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chart: null
    }
  }

  componentDidMount () {
    let chart = document.location.hash.split('#')[1]
    if (chart) {
      chart = JSON.parse(decodeURIComponent(chart))
      this.setState({chart: chart})
    }
  }

  render () {
    return (
      <Provider store={FpSdk.modules.store}>
        <div>
          {this.state.chart &&
            <FpChart chart={this.state.chart} />
          }
        </div>
      </Provider>
    )
  }
}

export default Loader
