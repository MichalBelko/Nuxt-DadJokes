<template>
  <div class="indexContainer">
    <h2>Welcome to the best corny dad jokes app on the web</h2>
    <NuxtLink to="/jokes">Browse Jokes</NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style>
::selection {
  background-color: red;
  color: white;
}
.indexContainer h2 {
  text-align: center;
  font-size: 1.5rem;
}
.indexContainer a {
  all: unset;
  text-align: center;
  display: block;
  margin-inline: auto;
  margin-block: 2rem;
  padding: 15px 10px;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid red;
  transition: 0.3s;
  width: fit-content;
}
.indexContainer a:hover {
  transform: scale(1.03);
}
/* <div class="container">
     <AppHeader />
     <Nuxt />
  </div> */

/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
}
a {
  color: #666;
  text-decoration: none;
}
ul {
  list-style: none;
}
.container {
  max-width: 800px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem 2rem;
  background: #fff;
} */
@media screen and (max-width: 347px) {
  .indexContainer h2 {
    font-size: 1.3rem;
  }
}
</style>
