import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate" // для сохранения стейта в localstorage
import router from './routes'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    editTask(state, task) {
      state.tasks.forEach((item, i) => {
        if(item.id == task.id) {
          state.tasks[i] = task;
          return;
        }
      })
    },
    deleteTask(state, taskId) {
      state.tasks.forEach((item, i) => {
        if(item.id == taskId) {
          state.tasks.splice(i, 1);
        }
      });
    }
  },
  plugins: [createPersistedState()],
});


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
