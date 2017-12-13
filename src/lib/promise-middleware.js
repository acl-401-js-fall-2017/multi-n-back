import * as actions from '../app/constants';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => async action => {

  if(!isPromise(action.payload)) return next(action);

  const { type, payload } = action;
  
  dispatch({
    type: actions.LOADING
  });
  
  try {
    const result = await payload;
    dispatch({ type: actions.LOADED });    
    dispatch({ 
      type, 
      payload: result
    });
  }
  catch(err) {
    dispatch({
      type: actions.ERROR,
      payload: err
    });

    throw err;
  }
};