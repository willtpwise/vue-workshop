<template>
  <div class="board">
    <div class="board-score">
      Score: {{ score }}
    </div>
    <div class="board-miss">
      Miss: {{ miss }}
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'score',
    'miss'
  ]
}
</script>

<style>

</style>
