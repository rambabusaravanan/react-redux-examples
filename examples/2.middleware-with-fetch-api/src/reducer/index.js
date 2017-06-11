const timer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'START':
      return Object.assign({}, state, { startTime: Date.now(), intervalId: action.intervalId });
    case 'TICK':
      return Object.assign({}, state, { count: Math.round((Date.now() - state.startTime) / 1000) });
    case 'STOP':
      return Object.assign({}, state, { intervalId: null });
    case 'SEND':
      return Object.assign({}, state, { error: action.error, message: "response sent: " + JSON.stringify(action.data) });
    default:
      return state;
  }
}

export default timer;