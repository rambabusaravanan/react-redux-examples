import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.start}>Start</button>
        <button onClick={() => this.props.stop(this.props.intervalId)}>Stop</button>
        <button onClick={() => this.props.send(this.props.count)}>Send</button>
        <div>{this.props.count}</div>
        <div>{this.props.message}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count,
    intervalId: state.intervalId,
    message: state.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    start: () => { dispatch({ type: 'START' }) },
    stop: (id) => { dispatch({ type: 'STOP', intervalId: id }) },
    send: (count) => { dispatch({ type: 'SEND', payload: request.get('http://echo.jsontest.com/counter/' + count) }) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)