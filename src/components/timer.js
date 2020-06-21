import React from "react"

export class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      remainingTime: 0,
      newTime: false
    }

    this.count = this.count.bind(this)
  }

  componentDidMount() {
    if (this.state.newTime) {
      this.setState({remainingTime: parseInt(this.props.startingTime), newTime: false}, () => {
        clearInterval(this.interval)
      })
    }
    this.interval = setInterval(this.count, 1000)
  }

  componentWillReceiveProps(props) {
    if (props.newTime) {
      this.setState({remainingTime: props.startingTime, newTime: true}, () => this.componentDidMount())
    }
  }

  count() {
    this.setState({remainingTime: this.state.remainingTime - 1}, () => {
      if (this.state.remainingTime <= 0) {
        clearInterval(this.interval)
      }
    })
  }

  render() {
    return (
      <p>{this.state.remainingTime || 0} seconds remaining.</p>
    )
  }
}