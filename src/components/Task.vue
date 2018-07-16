<template>
  <div class="task" :class="{ 'highlight': done }" @click="complete">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'done'
  ],

  methods: {
    complete () {
      this.$emit('complete')
    }
  }
}
</script>

<style scoped>

</style>
