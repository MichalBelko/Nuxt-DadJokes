<template>
  <div>
    <NuxtLink to="/jokes" class="back">Back to Jokes</NuxtLink>
    <p>{{ joke }}</p>
    <hr />
    <small>Joke ID : {{ $route.params.id }}</small>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head() {
    return {
      title: this.start + '...',
    }
  },
  data() {
    return {
      joke: {},
      start: '',
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      )
      this.joke = res.data.joke
      this.start = this.joke.slice(0, 25)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
.back {
  display: block;
  border: 1px solid black;
  margin-inline: auto;
  width: fit-content;
  padding: 0.5rem 1rem;
}
</style>
