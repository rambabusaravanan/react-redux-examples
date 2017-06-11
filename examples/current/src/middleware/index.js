export const timerMiddleware = store => next => action => {
  if (action.type === 'START') {
    action.intervalId = setInterval(() => { store.dispatch({ type: 'TICK', currentTime: Date.now() }) }, 1000)
  } else if (action.type === 'STOP') {
    clearInterval(action.intervalId)
  }
  next(action);
}

// export const promiseMiddleware = store => next => action => {
//   // check if the `payload` property is a promise, and, if so, wait for it to resolve
//   if (action.payload && typeof action.payload.then === 'function') {
//     action.payload.then(response => {
//       if (response.ok) return response.json();
//       throw new Error('Network response was not ok.');
//     }).then(json => {
//       action.data = json; next(action);
//     }).catch(error => {
//       console.log('There has been a problem with your fetch operation: ' + error.message);
//       action.error = error.message; next(action);
//     });
//   } else {
//     // no-op if the `payload` property is not a promise
//     next(action);
//   }
// };

export const promiseMiddleware = store => next => action => {
  // check if the `payload` property is a promise, and, if so, wait for it to resolve
  if (action.payload && typeof action.payload.end === 'function') {
    action.payload.end((err, res) => {
      if (err || !res.ok)
        action.error = err.message; 
      else
        action.data = res.body;
      next(action);
    });
  } else {
    next(action);
  }
};