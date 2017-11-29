let initState = []

const storeList = (state = initState, action) => {
  switch (action.type) {

    case 'UPDATE_ITEM':
      return action.data;

    case 'ADD_ITEM': 
      state.unshift(action.data)
      return state

    case 'REMOVE_ITEM': 
      return state.filter(item => {
        if(item.id !== action.data.id){
          return item;
        }
        return true
      })
    default:
      return state;
  }
}

export default storeList;