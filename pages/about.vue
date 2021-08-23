<template>
  <div class="aboutContainer">
    <h1>About DadJokes</h1>

    <div class="container">
      <p>This is an app that displays corny dad jokes</p>
      <p>
        Created by <a href="https://github.com/MichalBelko">Michal Belko</a>
      </p>
      <p>&copy Copyright 2021</p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'DadJokes | About',
    }
  },
}
</script>

<style>
.aboutContainer {
  text-align: center;
}
.aboutContainer h1 {
  margin-block: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #f30000;
}
.aboutContainer .container {
  margin: 0;
}
p a {
  color: currentColor;
  font-weight: bold;
  transition: all 0.3s;
}
p a:hover {
  border-inline: 2px solid #000;
  padding-inline: 5px;
}
@media screen and (max-width: 347px) {
  .aboutContainer h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  /* .aboutContainer p {
    padding-block: 5px;
  } */
}
</style>
