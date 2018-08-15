<template>
  <div id="app">
    <div class="sports-field">
      <score-board :score="totals.score" :miss="totals.miss"></score-board>
      <img
        class="soccer-goal"
        src="/static/soccer-goal.png"
        alt="Soccer goal">
      <img
        class="soccer-ball"
        :class="status"
        src="/static/soccer-ball.png"
        alt="Soccer ball"
        @click="shoot">
    </div>
  </div>
</template>

<script>
import ScoreBoard from './components/ScoreBoard'

export default {
  data () {
    return {
      status: '',
      totals: {
        score: 0,
        miss: 0
      }
    }
  },

  methods: {
    shoot () {
      const results = [
        'miss',
        'score'
      ]

      this.status = results[Math.floor(Math.random() * results.length)]

      setTimeout(() => {
        this.reset()
      }, 800)
    },

    reset () {
      this.status = 'reset'
      setTimeout(() => {
        this.status = ''
      }, 500)
    }
  },

  watch: {
    status () {
      this.totals[this.status] ++
    }
  },

  components: {
    ScoreBoard
  }
}
</script>

<style>
</style>
