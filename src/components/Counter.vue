<template>
  <div class="counter">
    Completed {{ done }} / {{ total }}
  </div>
</template>

<script>
export default {
  props: [
    'total',
    'done'
  ]
}
</script>

<style scoped>

</style>
