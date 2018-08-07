<template>
  <div class="counter">
    Completed {{ totalDone }} / {{ list.length }} ({{ percent }}%)
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.getters['todoList']
    },
    totalDone () {
      let count = 0
      for (let item of this.list) {
        if (item.done) {
          count ++
        }
      }
      return count
    },
    percent() {
      if (!this.list || !this.list.length) { return 0; }
      return Math.round(100 * (this.totalDone / this.list.length));
    }
  }
}
</script>

<style scoped>

</style>
