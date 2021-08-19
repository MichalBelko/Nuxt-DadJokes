<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="text" placeholder="Search a Joke.." />
    <input type="submit" value="Search a Joke" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('search-text', this.text)
      this.text = ''
    },
  },
}
</script>

<style></style>
