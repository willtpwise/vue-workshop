<template>
  <div class="task" :class="{ 'highlight': item.done }" @click="toggle">
    {{ item.name }}
  </div>
</template>

<script>

export default {
  props: [
    'item'
  ],

  methods: {
    toggle () {
      this.$emit('toggle-done', { item: this.item });
    }
  }
}
</script>

<style scoped>

</style>
