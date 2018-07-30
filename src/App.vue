<template>
  <div id="app">
    <header class="page-title">
      <h1>{{ heading }}</h1>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heading: 'To do list'
    }
  },

  created () {
    console.log(this.heading)
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
