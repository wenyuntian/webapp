let actionCreator = (type, data) => ({
    type: type,
    data: data
})

export const changeCity = (data) => {
  return (dispatch) => {
    dispatch(actionCreator('CHANGE_CITY', data)) 
  }
}