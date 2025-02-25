# Extend Components using Recharts

Beyond JSON configuration, it is possible to adapt underlying code.
* understanding recharts components
* create its own component
* extend recharts (or a custom component)
* change behavior and add its own

---
## Understanding Recharts component

The following sections describes what is in `./forepaas/recharts`, it is a ForePaaS package setup using `fppm` (the ForePaaS package manager).

### Getters

```jsx
  get queryParams() { return this.props.chart.data.query_params }
  get results() { return this.props.chart.data.results }
  get options () { return this.props.chart.options || {} }
  get evolScale() { return this.queryParams.evol && this.queryParams.evol.scale }
  get evolDepth() {
    if (this_.evolScale) return this.queryParams.evol.depth || 1
      return 0
  }
```

### State

```jsx
  state = {
    xAxis: new FpDimensions(get(this.queryParams, 'scale.axis.x') || get(this.queryParams, 'scale.fields') || []),
    yAxis: new FpDimensions(get(this.queryParams, 'scale.axis.y') || []),
    yCombinations: new Set(),
    xCombinations: new Set(),
    data: [],
    data2D: {},
    series: []
  }
```

---
## Recharts functions

Those functions may be grouped by:
* React functions (`componentDidMount()`, `render()`)
* Data preparation
* Displaying Recharts

### React functions

#### componentDidMount()

Update component `state` using formatted results from the request.
It should not be necessary to change that function. Any changes might be done into `componentIsReady()`.

```jsx
  componentDidMount () {
    this.generateChart()
  }

  generateChart () {
    // We need to know x and y combinations to do the render
    let state = {
      yCombinations: new Set(),
      xCombinations: new Set(),
      data: [],
      data2D: {},
      series: []
    }
    this.generateCombination(state)

    // We do a loop over data, compute mode, evolution and y combinations to generate Series
    this.generateSeries(state)

    // We can now generate data object for recharts library
    this.generateData(state)

    // We add easy function to decorate easily chart with json options
    this.generateDecoration(state)

    // Update state
    this.setState(state, () => {
      this.componentIsReady()
    })
  }

```

#### componentIsReady()

This is not strictly a *React function*, it's a hook to add custom logic as soon as component is ready.

```jsx
  // Hook for add custom logic after componentReady
  componentIsReady () {

  }
```

#### render()

Render the chart as drawn by the Recharts library.

```jsx
  render () {
    return (
      <ResponsiveContainer>
        <ComposedChart
          {...this.options}
          data={this.state.data}
        >
          <CartesianGrid {...this.options.cartesianGrid} />
          {!get(this.options, 'legend.hide') && <Legend {...this.options.legend} />}
          {this.renderSeries()}
          {this.renderXAxis(this.options.xAxis)}
          {this.renderYAxis(this.options.yAxis)}
          <Tooltip content={this.renderTooltip()} />
        </ComposedChart>
      </ResponsiveContainer>
    )
  }
```

---
## Data preparation

### Data formatting functions

#### getId()

Generate IDs for X and Y axis.
It's called `generateCombination()` and it should not be needed to be changed.

```jsx
getId (axis, result) {
    let id = {}
    axis.forEach(axe => {
      id[axe] = result.scales[axe]
    })
    return id
  }
```

#### generateCombination()

Builds a 2 dimensions array from `getId()` and query results.

```jsx
// We generate 2d table, and combinations on x and y
  generateCombination (state) {
    this.results.forEach(result => {
      const yId = this.getId(this.state.yAxis, result)
      const xId = this.getId(this.state.xAxis, result)
      // We don't want to update the props
      result = cloneDeep(result)
      result.xId = xId
      result.yId = yId
      state.xCombinations.add(JSON.stringify(xId))
      state.yCombinations.add(JSON.stringify(yId))
      state.data2D[JSON.stringify(xId)] = state.data2D[JSON.stringify(xId)] || {}
      state.data2D[JSON.stringify(xId)][JSON.stringify(yId)] = result
    })
  }
```

#### generateSeries()
Formate les données reçues du QB et ainsi les rendre utilisables par Recharts.

```jsx
// Series will be generated from data, computeMode, evolution and y combinations
  generateSeries (state) {
    Object.keys(this.queryParams.data.fields).forEach(data => {
      this.queryParams.data.fields[data].forEach(computeMode => {
        for (let evol = 0; evol <= this.evolDepth; evol++) {
          state.yCombinations.forEach(y => {
            let values = []
            let keys = JSON.parse(y)
            for (let k in keys) {
              values.push(k + '-' + keys[k])
            }
            values.unshift(evol)
            values.unshift(computeMode)
            values.unshift(data)
            const key = values.join('\_')
            const serieOptions = cloneDeep(get(this.options, `series.${key}`) || get(this.options, `series[${state.series.length}]`) || get(this.options, `series`) || {})
            state.series.push(Object.assign({
              data: data,
              computeMode: computeMode,
              evol: evol,
              y: y,
              key: key,
              name: this.getSerieName(data, computeMode, evol, JSON.parse(y))
            }, serieOptions))
          })
        }
      })
    })
    return this.series
  }
```

#### getSerieName()

Génère un nom pour une série de données. Ce nom sera ensuite utilisé pour les légendes, les tooltips et dans la fonction précédente (generateSeries()) pour identifier les données.

```jsx
// Serie name will be generated from here
  getSerieName (data, computeMode, evol, y) {
    let scaleName = this.state.yAxis.map(axe => {
      return FpTranslate(axe + '-' + y[axe], {default: y[axe], i18n: this.options.i18n})
    }).join(' ')
    let name = [FpTranslate(computeMode, {i18n: this.options.i18n}), FpTranslate(data, {i18n: this.options.i18n})]
    if (this.evolScale) name.push(FpTranslate('evol-' + this.evolScale + '-' + evol, {i18n: this.options.i18n}))
    name.push(scaleName)
    name = name.filter(n => n)
    return name.join(' ')
  }
```

#### generateData()

Format attendu par Recharts : Tableau d'objets.
 Un objet représentant une série de données

```jsx
const data = [
{
"name": "Page A",
"elemt1": 4000,
"elemt2": 2400,
"elemt3": 2400
},
{
"name": "Page B",
"elemt1": 3000,
"elemt2": 1398,
"elemt3": 2210
}
]
// Data need to be formated for recharts
  generateData (state) {
    state.xCombinations.forEach(x => {
      let res = {
        x: this.state.xAxis.format({scales: JSON.parse(x)}).valueOf()
      }
      state.series.forEach(serie => {
        res[serie.key] = get(state.data2D, `[${x}][${serie.\_y}].data[${serie.\_data}][${serie.\_computeMode}][${serie.\_evol}].value`)
      })
      state.data.push(res)
    })
  }
```

#### generateDecoration()

```jsx
// Decorate chart with JSON options
  generateDecoration (state) {
    if (this.options.colors) {
      state.series.forEach((serie, i) => {
        serie.fill = this.options.colors[i % this.options.colors.length]
      })
    }
  }
```

### Les fonctions Recharts

#### renderTooltip()

```jsx
renderTooltip () {
    return ({ active, payload, label }) => {
      if (!payload) return null
      let name = label
      if (this.state.xAxis.isTemporal()) name = this.state.xAxis.formatFromTimestamp(label)
      if (!active) return null
      return (
        <div className='tooltip' style={get(this.options, 'tooltip.style')}>
          <p className='label' style={get(this.options, 'tooltip.style-label')}>{name}</p>
          {payload.map((p, index) => {
            let color = p.fill
            if (color === '#fff' || color === '#FFF' || (color && color[0] !== '#' && color[0] !== 'r')) color = p.stroke === '#fff' || p.stroke === '#FFF' ? '#FFF' : p.stroke
            return (
              <div key={index} style={get(this.options, 'tooltip.style-content')}>
                <p className='value' style={get(this.options, 'tooltip.style-name')}><i className='fa fa-circle' style={{ color, marginRight: '10px', opacity: p.fillOpacity ? p.fillOpacity : 1 }} />{`${p.name}:`}</p>
                <p style={get(this.options, 'tooltip.style-value')}>{new FpMeasure(this.state.series[index].\_data).setValue(p.value).toString()}</p>
              </div>
            )
          })}
        </div>
      )
    }
  }
```

#### renderXLabel()

```jsx
renderXLabel () {
    return ({payload, x, y}) => {
      let options = {
        x: get(this.options, 'xAxis.tickStyle.x') || 0,
        y: get(this.options, 'xAxis.tickStyle.y') || 0,
        textAnchor: get(this.options, 'xAxis.tickStyle.textAnchor') || 'end',
        fill: get(this.options, 'xAxis.tickStyle.fill') || '#3E4550',
        rotate: get(this.options, 'xAxis.tickStyle.rotate') || 0,
        fontSize: get(yAxis, 'tickStyle.fontSize') || '13'
      }
      let label = payload.value
      if (this.state.xAxis.isTemporal()) {
        label = this.state.xAxis.formatFromTimestamp(payload.value)
      }
      return (
        <g transform={`translate(${x + options.x},${y + options.y})`}>
          <text x={0} y={0} dy={16} textAnchor={options.textAnchor} fontSize={options.fontSize} fill={options.fill} transform={`rotate(${options.rotate})`}>{label}</text>
        </g>
      )
    }
  }
  ```

#### renderYLabel()

```jsx
renderYLabel (yAxis) {
    return ({payload, x, y}) => {
      let options = {
        x: get(yAxis, 'tickStyle.x') || 0,
        y: get(yAxis, 'tickStyle.y') || 0,
        textAnchor: get(yAxis, 'tickStyle.textAnchor') || 'end',
        fill: get(yAxis, 'tickStyle.fill') || '#97A7B7',
        rotate: get(yAxis, 'tickStyle.rotate') || 0,
        fontSize: get(yAxis, 'tickStyle.fontSize') || '13'
      }
      return (
        <g transform={`translate(${x + options.x},${y + options.y})`}>
          <text x={0} y={0} dy={0} textAnchor={options.textAnchor} fontSize={options.fontSize} fill={options.fill} transform={`rotate(${options.rotate})`}>{this.yAxisTickFormatter(payload.value, yAxis)}</text>
        </g>
      )
    }
  }
```

#### yAxisTickFormatter()

```jsx
yAxisTickFormatter (value, yAxis) {
    if (!yAxis.fpFormat) return value
    return new FpMeasure(yAxis.fpFormat).setValue(value).toString()
  }
```

#### renderCustomizedLabel()

```jsx
renderCustomizedLabel = ({x, y, stroke, value, index}, serie, dataLength) => {
    if ((serie.label && dataLength <= 25) || (serie.label && dataLength > 25 && dataLength <= 50 && index % 2 === 0) || (serie.label && dataLength > 50 && index % 4 === 0)) {
      return (
        <text x={x} y={y} dy={-10} fill={stroke} fontSize={11} textAnchor='middle'>{new FpMeasure(serie.\_data).setValue(value).toString()}</text>
      )
    }
    return null
  }
```

#### renderSeries()

```jsx
renderSeries () {
    this.state.series.sort((s1, s2) => {
      if (s1.order < s2.order) return -1
      if (s1.order > s2.order) return 1
      return 0
    })
    return this.state.series.map((serie) => {
      let Type = Types[serie.\_type || 'line']
      return (
        <Type dataKey={serie.key} {...serie} label={(props) _=> this_.renderCustomizedLabel(props, serie, this.state.data.length)} />
      )
    })
  }
```

#### generateXAxisDomain()

```jsx
generateXAxisDomain (domain) {
    domain.forEach((value, i) => {
      if (value.indexOf('=>') !== -1) {
        let tmp = value.split('=>')
        domain[i] = new Function(tmp[0], 'return ' + tmp[1])
      }
    })
    return domain
  }
```

#### generateYAxisDomaine()

```jsx
generateYAxisDomain (domain) {
    domain.forEach((value, i) => {
      if (value.indexOf('=>') !== -1) {
        let tmp = value.split('=>')
        domain[i] = new Function(tmp[0], 'return ' + tmp[1])
      }
    })
    return domain
  }
```

#### renderXAxis()

```jsx
renderXAxis (xAxes) {
    xAxes = xAxes || [{}]
    if (!Array.isArray(xAxes)) xAxes = [xAxes]
    return xAxes.map((xAxis, i) => {
      if (this.state.xAxis.isTemporal()) {
        xAxis.domain = xAxis.domain || ['auto', 'auto']
        xAxis.type = xAxis.type || 'number'
      }
      if (xAxis.domain) this.generateXAxisDomain(xAxis.domain)
      return <XAxis key={'x-' + i} dataKey='x' tick={this.renderXLabel(xAxis)} {...xAxis} />
    })
  }
```

#### renderYAxis()

```jsx
renderYAxis (yAxes) {
    yAxes = yAxes || [{}]
    if (!Array.isArray(yAxes)) yAxes = [yAxes]
    return yAxes.map((yAxis, i) => {
      if (yAxis.domain) this.generateYAxisDomain(yAxis.domain)
      return <YAxis key={'y-' + i} tick={this.renderYLabel(yAxis)} {...yAxis} />
    })
  }
```

---
## Rewriting functions

### Exemple

```jsx
import React_ from_ 'react'
import { ComposedChart, Area, LabelList, ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip, Legend }_ from_ 'recharts'
import PropTypes_ from_ 'prop-types'
import moment_ from_ 'moment'
import get_ from_ 'lodash/get'
import Recharts_ from_ 'forepaas/recharts'
import FpTranslate_ from_ 'forepaas/translate'
import { FpMeasure }_ from_ 'forepaas/formatter'
import DisciplineColors_ from_ '../../../services/DisciplineColors'
const orderDisc = ['Civil', 'Architecture', 'Steel Structure', 'Piping', 'Mechanical', 'Electrical', 'Instrument', 'Insulation', 'Painting', 'Temporary Facilities']
class ChartManPowerPerDiscipline extends Recharts.area {
  get options () {
    return {
      ...super.options,
      margin: {top: 20, right: 0, left: 10, bottom: 15},
      series: {
        stackId: 1,
        fillOpacity: 1
      },
      yAxis: {
        tickLine: false,
        axisLine: false,
        mirror: true
      },
      xAxis: {
        tickLine: false,
        padding: { left: 30 }
      },
      legend: {
        align: 'right',
        layout: 'vertical',
        iconType: 'circle',
        verticalAlign: 'top'
      }
    }
  }
  generateDecoration (state) {
    super.generateDecoration(state)
    state.series.forEach(serie => {
      const disc = serie.\_y.split('"')[3]
      serie.fill = DisciplineColors.getColor(disc)
    })
  }
  generateSeries (state) {
    super.generateSeries(state)
    const orderDiscReverse = [...orderDisc].reverse()
    state.series = state.series.sort((a, b) => orderDiscReverse.indexOf(a.name) - orderDiscReverse.indexOf(b.name))
  }
  valueAccessor = (entry) => {
    const { x, ...data } = entry.payload
    const total = Object.values(data).reduce((a, b) => a + b)
    return entry.value[1] === total ? total : ''
  }
  renderLabel () {
    return (props) => {
      const { x, y, value } = props
      return (
        <g>
          <text x={x} y={y - 10} fontSize={13} fill='#3E4550' textAnchor='middle' dominantBaseline='middle'>
            {value}
          </text>
        </g>
      )
    }
  }
  renderXLabel () {
    return ({payload, x, y}) => {
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor='center' fill='#3E4550' fontSize={13} transform='rotate(0)'>{moment(payload.value).format('ddd.')}</text>
          <text x={0} y={0} dy={32} textAnchor='center' fill='#3E4550' fontSize={13} transform='rotate(0)'>{moment(payload.value).format('MMM.DD')}</text>
        </g>
      )
    }
  }
  renderYLabel () {
    return (props) => {
      const {payload, x, y} = props
      const value = payload.value.toString().replace(/_\B_(?=(\d{3})+(?!\d))/g, ',')
      return (
        <g transform={`translate(${x - 8},${y - 10})`}>
          <text x={0} y={0} dy={0} textAnchor='start' fill='#97A7B7' fontSize={11} transform='rotate(0)'>{value}</text>
        </g>
      )
    }
  }
  renderLegend = ({ payload }) => {
    payload = payload.sort((a, b) => orderDisc.indexOf(a.value) - orderDisc.indexOf(b.value))
    const { x, ...data } = this.state.data[this.state.data.length - 1]
    const total = Object.values(data).reduce((a, b) => a + b)
    return (
      <ul className='actual-man-power-legend-chart'>
        <li className='actual-man-power-legend-chart-item'>
          <i className='fa fa-circle-thin' style={{ color: '#3E4550' }} />
          <span className='actual-man-power-legend-text' style={{ fontWeight: 'bold' }}>Total</span>
          <span className='actual-man-power-legend-value'>{total}</span>
        </li>
        {
          payload.map((entry, index) => {
            return (
              <li className='actual-man-power-legend-chart-item' key={`item-${index}`}>
                <i className='fa fa-circle' style={{ color: entry.payload.fill }} />
                <span className='actual-man-power-legend-text'>{FpTranslate(entry.value)}</span>
                <span className='actual-man-power-legend-value'>{this.state.data[this.state.data.length - 1][entry.dataKey]}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
  renderTooltip () {
    return ({ active, payload, label }) => {
      if (!payload) return null
      let name = label
      if (this.state.xAxis.isTemporal()) name = this.state.xAxis.formatFromTimestamp(label)
      if (!active) return null
      payload = payload.sort((a, b) => orderDisc.indexOf(a.name) - orderDisc.indexOf(b.name))
      return (
        <div className='tooltip' style={get(this.options, 'tooltip.style')}>
          <p className='label' style={get(this.options, 'tooltip.style-label')}>{name}</p>
          {payload.map((p, index) => {
            let color = p.fill
            if (color === '#fff' || color === '#FFF' || (color && color[0] !== '#')) color = p.stroke === '#fff' || p.stroke === '#FFF' ? '#FFF' : p.stroke
            return (
              <div key={index} style={get(this.options, 'tooltip.style-content')}>
                <p className='value' style={get(this.options, 'tooltip.style-name')}><i className='fa fa-circle' style={{ color, marginRight: '10px', opacity: p.fillOpacity ? p.fillOpacity : 1 }} />{`${p.name}:`}</p>
                <p style={get(this.options, 'tooltip.style-value')}>{new FpMeasure(this.state.series[index].\_data).setValue(p.value).toString()}</p>
              </div>
            )
          })}
        </div>
      )
    }
  }
  renderSeries () {
    return this.state.series.map((serie) => {
      return (
        <Area dataKey={serie.key} {...serie}>
          <LabelList position='top' valueAccessor={this.valueAccessor} content={this.renderLabel()} />
        </Area>
      )
    })
  }
  render () {
    if (!this.state.data) return null
    return (
      <ResponsiveContainer>
        <ComposedChart
          margin={this.options.margin}
          data={this.state.data}
        >
          <CartesianGrid {...this.options.cartesianGrid} />
          <XAxis dataKey='x' tick={this.renderXLabel()} {...this.options.xAxis} />
          <YAxis tick={this.renderYLabel()} {...this.options.yAxis} />
          <Tooltip content={this.renderTooltip()} />
          <Legend {...this.options.legend} content={this.renderLegend} />
          {this.renderSeries()}
        </ComposedChart>
      </ResponsiveContainer>
    )
  }
}
ChartManPowerPerDiscipline.propTypes = {
  chart: PropTypes.object
}
export default ChartManPowerPerDiscipline
```

### Exemple de composant sans étendre la librairie

```jsx
import React, { Component, Fragment }_ from_ 'react'
import PropTypes_ from_ 'prop-types'
import {PieChart, Pie, ResponsiveContainer, Tooltip, Cell, Legend}_ from_ 'recharts'
import get_ from_ 'lodash/get'
import FpTranslate_ from_ 'forepaas/translate'

class ChartPie extends Component {
  get results () { return this.props.chart.data.data || [] }
  get empty () { return !this.results.length }
  get options () {
    return {
      ...super.options,
      series: {
        labelLine: false,
        isAnimationActive: false
      },
      tooltip: {
        style: {
          padding: '10px 20px',
          minWidth: '200px',
          backgroundColor: 'white',
          borderRadius: 10,
          boxShadow: '0 10px 30px 0 rgba(151,167,183,0.3)',
          border: 'none',
          marginTop: -30
        },
        'style-label': {
          fontSize: 13
        },
        'style-content': {
          display: 'flex',
          justifyContent: 'space-between'
        },
        'style-name': {
          fontSize: 13
        },
        'style-value': {
          fontSize: 13,
          fontWeight: 600
        }
      },
      legend: {
        verticalAlign: 'top'
      }
    }
  }
  getValueFormated = (value, decimal = 0) => {
    if (!value && value !== 0) return 0
    return value.toFixed(decimal)
  }
  formatValueThousand = (value) => {
    if (!value && value !== 0) return null
    return value.toString().replace(/_\B_(?=(\d{3})+(?!\d))/g, ',')
  }
  renderLabel () {
    return (props) => {
      const { cx, cy, midAngle, innerRadius, outerRadius, forecast\_deviation, disc } = props
      const RADIAN = Math.PI / 180
      let radius = innerRadius + (outerRadius - innerRadius) \* 1.3
      const x = cx + radius \* Math.cos(-midAngle \* RADIAN)
      const y = cy + radius \* Math.sin(-midAngle \* RADIAN)
      const labelLength = FpTranslate(`disc-${disc}`).length
      return (
        <Fragment>
          <rect x={x > cx ? x - 3 : x - 3 - labelLength \* 5} y={y - 27} width={labelLength \* 6} height='15' rx='10' ry='10' fill='white' />
          <circle cx={x > cx ? x + 10 : x - 10} cy={y} r='20' fill='white' />
          <text x={x} y={y - 20} fill='#485465' fontSize={13} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>{FpTranslate(`disc-${disc}`)}</text>
          <text x={x} y={y} fill={forecast\_deviation > 100 ? '#FF6F90' : '#3FE5CA'} fontSize={13} fontWeight={600} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
            {`${this.getValueFormated(forecast\_deviation, 0)}%`}
          </text>
        </Fragment>
      )
    }
  }
  renderTooltip () {
    return ({ active, payload }) => {
      if (!active) return null
      const p = payload[0].payload
      return (
        <div className='tooltip' style={get(this.options, 'tooltip.style')}>
          <p className='label' style={get(this.options, 'tooltip.style-label')}>{FpTranslate(`disc-${p.disc}`)}</p>
          <div style={get(this.options, 'tooltip.style-content')}>
            <p className='value' style={get(this.options, 'tooltip.style-name')}>Planned:</p>
            <p style={get(this.options, 'tooltip.style-value')}>{this.formatValueThousand(this.getValueFormated(p.planned, 0))}</p>
          </div>
          <div style={get(this.options, 'tooltip.style-content')}>
            <p className='value' style={get(this.options, 'tooltip.style-name')}>Forecast:</p>
            <p style={get(this.options, 'tooltip.style-value')}>{this.formatValueThousand(this.getValueFormated(p.forecast, 0))}</p>
          </div>
          <div style={get(this.options, 'tooltip.style-content')}>
            <p className='value' style={get(this.options, 'tooltip.style-name')}>Deviation:</p>
            <p style={{ ...get(this.options, 'tooltip.style-value'), color: p.forecast\_deviation > 100 ? '#FF6F90' : '#3FE5CA' }}>{this.getValueFormated(p.forecast\_deviation, 0)}%</p>
          </div>
          <div style={get(this.options, 'tooltip.style-content')}>
            <p className='value' style={get(this.options, 'tooltip.style-name')}>Value ratio:</p>
            <p style={{ ...get(this.options, 'tooltip.style-value'), color: p.Project\_impact > 0 ? '#FF6F90' : '#3FE5CA' }}>{`${p.Project\_impact > 0 ? '+' : ''}${this.getValueFormated(p.Project\_impact, 1)}%`}</p>
          </div>
        </div>
      )
    }
  }
  renderLegend = (props) => {
    return (
      <div className='legend-pie-chart-2-dimensions'>
        Planned MH
      </div>
    )
  }
  renderRedSeries () {
    const results = this.results.filter(res => res.forecast\_deviation > 100)
    return results.map((result, index) => {
      return (
        <Pie key={'red' + index} data={this.results} dataKey='forecast' outerRadius={this.getValueFormated(result.forecast\_deviation \* 1.5 + 6, 0)} {...this.options.series}>
          {this.results.map((entry, index) =>
            <Cell key={index} stroke={entry.disc === result.disc ? 'white' : 'none'} fill='#FF6F90' fillOpacity={entry.disc === result.disc ? 1 : 0} />
          )}
        </Pie>
      )
    })
  }
  renderGreenSeries () {
    return (
      <Pie data={this.results} dataKey='forecast' interval={0} label={this.renderLabel()} fill='#3FE5CA' fillOpacity={1} outerRadius={100 \* 1.5} {...this.options.series} />
    )
  }
  renderPurpleSeries () {
    return this.results.map((result, index) => {
      const deviation = result.forecast\_deviation > 100 ? 100 : result.forecast\_deviation
      return (
        <Pie key={'purple' + index} data={this.results} dataKey='forecast' outerRadius={this.getValueFormated(deviation \* 1.5, 0)} {...this.options.series}>
          {this.results.map((entry, index) => <Cell key={index} stroke={deviation === 100 ? 'white' : 'none'} fill='#617DE9' fillOpacity={entry.disc === result.disc ? 1 : 0} />)}
        </Pie>
      )
    }
    )
  }
  render () {
    if (this.empty) return <div className='fp-chart-no-data'>No data available</div>
    return (
      <ResponsiveContainer>
        <PieChart>
          <Legend {...this.options.legend} content={this.renderLegend} />
          {this.renderRedSeries()}
          <circle cx='50%' cy='50%' r='155' fill='white' />
          <circle cx='50%' cy='50%' stroke='#3E4550' r='152' fill='white' strokeDasharray='5,5' strokeWidth='1' />
          {this.renderGreenSeries()}
          {this.renderPurpleSeries()}
          <Tooltip content={this.renderTooltip()} />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
ChartPie.propTypes = {
  chart: PropTypes.object
}
export default ChartPie
```

