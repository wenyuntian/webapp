export default {

  // 获取localStorage中的数据
  getItem: function(key) {
    let value;
    try {
      value = localStorage.getItem(key)
    } 
    catch (error) {
        console.error('localStorage.getItem报错：',error.message)
    }
    finally {
      return value;
    }
  },

  setItem: function(key, value) {
    try {
      localStorage.setItem(key, value)
    } 
    catch (error) {
        console.error('localStorage.setItem报错：', error.message)
    }
  }
}