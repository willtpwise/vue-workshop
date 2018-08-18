<template>
  <div id="app">
    <div class="sports-field">
      <h1>{{ title }}</h1>
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
export default {
  data () {
    return {
      status: '',
      title: "Let's play"
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
  }
}
</script>

<style>
</style>
