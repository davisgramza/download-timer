import React from "react"
import {Selector} from "./selector"
import {Timer} from "./timer"
import labels from "../labels.json"

export class DownloadTimer extends React.Component {
  constructor(props) {
    super(props)

    this.DOWNLOAD = 0
    this.SIZE = 1
    this.labels = labels

    this.state = {
      download: {
        number: 0,
        unit: 0
      },
      size: {
        number: 0,
        unit: 0
      },
      startingTime: this.props.startingTime
    }

    this.updateVariables = this.updateVariables.bind(this)
    this.updateTime = this.updateTime.bind(this)
  }

  updateVariables(state, index) {
    if (index === this.DOWNLOAD) {
      this.setState({download: state}, () => this.updateTime())
    }
    if (index === this.SIZE) {
      this.setState({size: state}, () => this.updateTime())
    }
  }

  updateTime() {
    let newTime = (this.state.size.number * this.state.size.unit) / ((this.state.download.number * this.state.download.unit !== 0) ? this.state.download.number * this.state.download.unit : 1)
    this.setState({startingTime: newTime}, () => (this.state.startingTime))
  }

  render() {
    let timer = <Timer startingTime={this.state.startingTime} newTime="New" />
    return (
      <div>
        <p>Download Speed</p>
        <Selector labels={this.labels} updateVariables={this.updateVariables} index={this.DOWNLOAD} key={this.DOWNLOAD} />
        <p>Size</p>
        <Selector labels={this.labels} updateVariables={this.updateVariables} index={this.SIZE} key={this.SIZE} />
        {timer}
      </div>
    )
  }
}