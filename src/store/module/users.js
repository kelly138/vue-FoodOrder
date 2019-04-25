const state = {
  currentUserName: null,

}

const getters = {
  constcurrentUserName: state => state.currentUserName

}

const mutations = {
  userStatus(state, user) {
    if (user) {
      state.currentUserName = user
      state.isLogin = true
    } else {
      state.currentUserName = null
      state.isLogin = false
    }


  }
}

const actions = {
  // 应用mutations
  setUser({
    commit
  }, user) {
    commit("userStatus", user)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}