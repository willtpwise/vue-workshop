<template>
  <div id="app">
    <div class="sports-field">
      <h1>{{ title }}</h1>
      <board :score="score" :miss="miss"></board>
      <goal></goal>
      <ball :image="src" @score="score ++" @miss="miss ++"></ball>
    </div>
  </div>
</template>

<script>
import Goal from './components/Goal.vue'
import Ball from './components/Ball.vue'
import Board from './components/Board.vue'

export default {
  components: {
    Goal,
    Ball,
    Board
  },

  data () {
    return {
      score: 0,
      miss: 0,
      status: '',
      title: "Getting started",
      goalClass: "something-great",
      src: '/static/soccer-ball.png'
    }
  },

  methods: {


    reset () {
      this.status = 'reset'
      setTimeout(() => {
        this.status = ''
      }, 500)
    },

    imageSrc () {
      return '/static/soccer-ball.png'
    }
  }
}
</script>

<style>
</style>
