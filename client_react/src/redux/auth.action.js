export const signInUser = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
  }
};

export const signOutUser = (userId) => {
  return {
    type: 'SIGN_OUT',
    payload: userId
  }
};