<template>
  <header>
    <h1>The Hikers Blog</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
