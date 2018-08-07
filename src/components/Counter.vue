<template>
  <div class="counter">
    Completed {{ totalDone }} / {{ list.length }}
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
    }
  }
}
</script>

<style scoped>

</style>
