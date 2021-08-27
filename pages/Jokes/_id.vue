<template>
  <div>
    <NuxtLink to="/jokes" class="back">Back to Jokes</NuxtLink>
    <p class="currentJoke">{{ joke }}</p>
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
  all: unset;
  text-align: center;
  display: block;
  margin-inline: auto;
  margin-block: 1rem;
  padding: 10px 10px;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid red;
  transition: 0.3s;
  width: fit-content;
}
.currentJoke {
  font-size: clamp(0.95rem, 0.8vw + 0.8rem, 1.4rem);
  text-align: center;
}
hr {
  margin-block: 1rem;
}
small {
  text-align: right;
  display: block;
}
@media screen and (max-width: 500px) {
  small {
    text-align: center;
  }
}
</style>
