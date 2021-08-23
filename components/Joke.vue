<template>
  <NuxtLink :to="`jokes/${id}`">
    <div class="joke">
      <p>{{ joke }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['joke', 'id'],
}
</script>

<style>
.joke {
  padding: 1rem;
  border: 1px dotted gray;
  margin: 1rem 0;
}
.joke:hover {
  color: black;
}
</style>
