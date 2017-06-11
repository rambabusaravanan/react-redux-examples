export const timerMiddleware = store => next => action => {
  if (action.type === 'START') {
    action.intervalId = setInterval(() => { store.dispatch({ type: 'TICK', currentTime: Date.now() }) }, 1000)
  } else if (action.type === 'STOP') {
    clearInterval(action.intervalId)
  }
  next(action);
}