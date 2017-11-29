let actionCreator = (type, data) => ({
    type: type,
    data: data
})

// 更新收藏列表
export const update = (data) => {
  return (dispatch) => {
    dispatch(actionCreator('UPDATE_ITEM', data)) 
  }
}

// 新增收藏列表
export const add = (item) => {
  return (dispatch) => {
    dispatch(actionCreator('ADD_ITEM', item)) 
  }
}

// 删除收藏列表
export const remove = (item) => {
  return (dispatch) => {
    dispatch(actionCreator('REMOVE_ITEM', item)) 
  }
}