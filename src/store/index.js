import Vue from 'vue'
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

const toggle = (item) => {
  return { 
    ...item,
    done: !item.done,
  }
}

const storeConfig = {
  state: {
    list: [],
  },
  getters: {
    todoList(state) {
      return state.list;
    },
    doneCount(state) {
      return state.list.reduce((subtotal, task) => {
        return subtotal + (task.done ? 1 : 0);
      }, 0);
    }
  },
  mutations: {
    setList(state, { list }) {
      state.list = list;
    },

    toggleItem(state, { item }) {
      const i = state.list.indexOf(item)
      state.list = state.list.map((elem, idx) => {
        if (i === idx) {
          return toggle(elem);
        }
        return elem;
      })
    },

    addItem(state, { item }) {
      state.list = state.list.concat([item])
    }
  },
  actions: {
    async fetchList(state) {
      const { data } = await axios.get('/static/to-do.json')
      return data;
    }
  }
}

export default new Vuex.Store(storeConfig);