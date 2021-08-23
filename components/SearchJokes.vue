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

<style>
form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
form > input:first-child {
  flex-basis: 75%;
  letter-spacing: 1px;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid black;
  padding-inline: 10px;
}
form > * + * {
  flex-basis: 25%;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.5px;
  border: none;
  outline: 1px solid white;
  outline-offset: 0;
  background-color: red;
  color: #fff;
  transition: 0.2s;
}
input {
  caret-color: #ff0000;
  padding: 10px 5px;
}
input[type='submit']:hover {
  outline-offset: -5px;
}

input:focus:not([type='submit']) {
  outline: none;
}
</style>
