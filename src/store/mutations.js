//  // 改变属性的状态
//  export const setMenuItems = (state, data) => {
//    state.menuItems = data
//  }

//  // 将匹配到的对象，在数组中删除
//  export const removeMenuItems = (state, data) => {
//      state.menuItems.forEach((item, index) => {
//        if (item = data) {
//          state.menuItems.splice(index, 1)
//        }
//      })
//    },
//    // 将新添加的pizza添加到menuItems属性中
//    export const pushToMenuItems = (state, data) => {
//        state.menuItems.push(data)
//      },
//      // 更改用户的状态信息
//      export const userStatus = (state, user) => {
//        if (user) {
//          state.currentUserName = user
//          state.isLogin = true
//        } else {
//          state.currentUserName = null
//          state.isLogin = false
//        }


//      }