<template>
  <div id="app">
    <header class="page-title">
      <h1>To do list</h1>
    </header>

    <congratulations v-if="totalDone === list.length"></congratulations>
    <counter v-else></counter>

    <task
      v-for="(item, idx) in list"
      :item="item"
      :key="idx">
    </task>
  </div>
</template>

<script>
import Task from './components/Task'
import Counter from './components/Counter'
import Congratulations from './components/Congratulations'

export default {
  components: {
    Task,
    Counter,
    Congratulations
  },

  computed: {
    list() {
      return this.$store.getters['todoList'];
    },
    totalDone () {
      return this.list.filter((item) => {
        return !!item.done
      }).length;
    }
  },

  methods: {
    async fetchList () {
      const list = await this.$store.dispatch('fetchList');
      this.$store.commit('setList', { list });
    }
  },

  async created () {
    await this.fetchList();
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
