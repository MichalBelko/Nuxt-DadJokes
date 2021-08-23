<template>
  <div>
    <SearchJokes @search-text="searchText" />
    <Joke
      v-for="joke in jokes"
      :key="joke.id"
      :joke="joke.joke"
      :id="joke.id"
    />
    <div class="btn-container">
      <button @click="previous">Previous</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jokes: [],
      index: 1,
    }
  },

  head() {
    return {
      title: 'DadJokes | Jokes',
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
        `https://icanhazdadjoke.com/search?page=${this.index}`,
        config
      )

      this.jokes = res.data.results
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async searchText(text) {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        )
        this.jokes = res.data.results
      } catch (error) {
        console.log(error)
      }
    },
    async next() {
      if (this.index >= 1 && this.index < 33) {
        this.index++
        const config = {
          headers: {
            Accept: 'application/json',
          },
        }
        try {
          const res = await axios.get(
            `https://icanhazdadjoke.com/search?page=${this.index}`,
            config
          )

          this.jokes = res.data.results
        } catch (error) {
          console.log(error)
        }
      }
    },
    async previous() {
      if (this.index > 1 && this.index <= 33) {
        this.index--
        const config = {
          headers: {
            Accept: 'application/json',
          },
        }
        try {
          const res = await axios.get(
            `https://icanhazdadjoke.com/search?page=${this.index}`,
            config
          )

          this.jokes = res.data.results
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
}
</script>

<style>
.btn-container {
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
}
.btn-container > * {
  width: 100px;
  padding: 10px 5px;

  outline: none;
  border: none;
  cursor: pointer;
  background-color: #ff0000;
  color: #fff;
  font-size: 1rem;
}
.btn-container button:hover {
  transform: scale(1.02);
}
.btn-container button:first-child {
  border-radius: 15px 0 0 15px;
}
.btn-container button:last-child {
  border-radius: 0 15px 15px 0;
}
</style>
