<template>
  <div class="board">
    <div class="board-score">
      Score
      {{ score }}
    </div>
    <div class="board-miss">
      Miss
      {{ miss }}
    </div>
    <div class="board-total">
      Total
      {{ total }}
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'score',
      'miss'
    ],

    computed: {
      total () {
        return this.score + this.miss
      }
    }
  }
</script>

<style lang="css">

</style>
