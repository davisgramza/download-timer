import React from "react"

export class Selector extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      number: 0,
      unit: this.props.labels[Object.keys(this.props.labels)[0]]
    }

    this.props.updateVariables(this.state, this.props.index)

    this.numberUpdatedNotification = this.numberUpdatedNotification.bind(this)
    this.unitUpdatedNotification = this.unitUpdatedNotification.bind(this)
  }

  getOptions() {
    let options = []
    let counter = 0
    for (let label in this.props.labels) {
      let value = this.props.labels[label]
      options.push(
        <option value={value} key={counter}>{label}</option>
      )
      counter++
    }
    return options
  }

  numberUpdatedNotification(event) {
    let number = parseInt(event.target.value) || 0
    this.setState({number: number}, () => this.props.updateVariables(this.state, this.props.index))
  }

  unitUpdatedNotification(event) {
    let unit = parseInt(event.target.value)
    this.setState({unit: unit}, () => this.props.updateVariables(this.state, this.props.index))
  }

  render() {
    let options = this.getOptions()
    return (
      <div>
        <input type="text" pattern="[0-9]*" value={this.state.number} onChange={(event) => this.numberUpdatedNotification(event)}/>
        <select value={this.state.unit} onChange={(event) => this.unitUpdatedNotification(event)}>
          {options}
        </select>
      </div>
    )
  }
}