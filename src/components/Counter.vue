<template>
  <div class="counter">
    Completed {{ done }} / {{ total }} ({{ percent }}%)
  </div>
</template>

<script>
export default {
  props: [
    'done',
    'total',
  ],
  computed: {
    percent() {
      if (!this.total) { return 0; }
      return Math.round(100 * (this.done / this.total))
    }
  }
}
</script>

<style scoped>

</style>
