<template>
  <div id="app">
    <header class="page-title">
      <h1>To do list</h1>
    </header>

    <congratulations v-if="totalDone === list.length"></congratulations>
    <counter v-else :done="totalDone" :total="list.length"></counter>

    <task
      v-for="item in list"
      :name="item.name"
      :done="item.done"
      @complete="toggleDone(item)">
    </task>
  </div>
</template>

<script>
import Task from './components/Task'
import Counter from './components/Counter'
import Congratulations from './components/Congratulations'
import ToDoItems from './assets/to-do.json'

export default {
  components: {
    Task,
    Counter,
    Congratulations
  },

  data () {
    return {
      list: ToDoItems
    }
  },

  computed: {
    totalDone () {
      let count = 0
      for (let item of this.list) {
        if (item.done) {
          count ++
        }
      }
      return count
    }
  },

  methods: {
    toggleDone (item) {
      if (item.done) {
        item.done = false
      } else {
        item.done = true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
