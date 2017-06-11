import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.start}>Start</button>
        <button onClick={() => this.props.stop(this.props.intervalId)}>Stop</button>
        <div>{this.props.count}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count,
    intervalId: state.intervalId,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    start: () => { dispatch({ type: 'START' }) },
    stop: (id) => { dispatch({ type: 'STOP', intervalId: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)