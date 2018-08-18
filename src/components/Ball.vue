<template>
  <img
    :class="status"
    @click="shoot"
    class="soccer-ball"
    :src="image"
    alt="Soccer ball">
</template>

<script>
export default {
  data () {
    return {
      status: ''
    }
  },

  props: [
    'image'
  ],

  watch: {
    status () {
      if ( this.status == 'score' ) {
        this.$emit('score')
      } else if ( this.status == 'miss' ) {
        this.$emit('miss')
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
    },
  }
}
</script>

<style>

</style>
