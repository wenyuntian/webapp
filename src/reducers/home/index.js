import Store from '../../conmon/js/localStorage.js'

// 从localStorage中获取当前城市
let localStorageCity = Store.getItem('CITY_NAME')

// 如果localStorage中没有值，则将localStorage设置为北京
if(localStorageCity == null) {
  localStorageCity = '北京'
  Store.setItem('CITY_NAME', localStorageCity)
}

let initState = { 
  city: localStorageCity
}

const userInfor = (state = initState, action) => {
  switch (action.type) {
    
    case 'CHANGE_CITY': 
      return {
        ...state,
        city: action.data
      };

    case 'USER_LOGIN': 
      return {
        ...state,
        userName: action.data
      };
    default:
      return {...state};
  }
}

export default userInfor;