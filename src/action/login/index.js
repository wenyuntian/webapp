let actionCreator = (type, data) => ({
    type: type,
    data: data
})

export const userLogin = (data) => {
  return (dispatch) => {
    dispatch(actionCreator('USER_LOGIN', data)) 
  }
}