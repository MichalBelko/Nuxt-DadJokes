<template>
  <header class="header">
    <h1 class="title">Dad Jokes</h1>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/jokes">Jokes</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script>
export default {}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-top: 1rem;
  border-bottom: 2px solid red;
  flex-wrap: wrap;
}
header > * {
  padding-bottom: 1rem;
}
header .title {
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
  background: linear-gradient(to right, orange, #ff0000);
  background-size: 200%;
  background-position: center;
  -webkit-background-clip: text;
  -webkit-text-stroke: 5px transparent;
}
.header a {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background: linear-gradient(red 0 0) 50% var(--d, 0px),
    linear-gradient(red 0 0) var(--d, 0px) 50%,
    linear-gradient(red 0 0) 50% calc(100% - var(--d, 0px)),
    linear-gradient(red 0 0) calc(100% - var(--d, 0px)) 50%;
  background-size: 100% 2px, 2px 100%;
  background-repeat: no-repeat;
  transition: 0.5s;

  color: black;
  font-size: 1.2rem;
  margin-right: 10px;
}
.header a:hover {
  --d: 6px;
}
header ul {
  padding-inline: 1rem;
}
@media screen and (max-width: 672px) {
  header {
    justify-content: center;
  }

  header .title {
    font-size: 2.5rem;
    text-align: center;
  }
}
@media screen and (max-width: 500px) {
  .header ul {
    padding-inline: 0;
  }
}
@media screen and (max-width: 347px) {
  .header ul li a {
    display: block;
    margin-inline: auto;
    margin-block: 10px;
  }
  h1.title {
    padding-bottom: 0;
  }
  .header {
    padding-top: 0;
    margin-bottom: 2rem;
  }
  .indexContainer h2 {
    font-size: 1.3rem;
  }
}
</style>
