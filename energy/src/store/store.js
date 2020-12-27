import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
  state: {
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization
      localStorage.setItem('Authorization', user.Authorization)
    }
  }
})

export default store
