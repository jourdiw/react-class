const actionLogger = store => next => action => {
  console.log("action:", action);
  next(action);
  let result = next(action);
  console.log("new state", store.getState());
  return result;
};

export default actionLogger;
