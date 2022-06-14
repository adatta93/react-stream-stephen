export const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STREAMS':
      return _convertArrayToObject(action.payload, 'id');
    case 'FETCH_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'EDIT_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_STREAM':
      const { [action.payload]: omit, ...otherStreams } = state;
      return otherStreams;
    default:
      return state;
  }
}

const _convertArrayToObject = (array, key) => {
  let newObject = {};
  array.forEach(item => newObject[item[key]] = item);
  return newObject;
}