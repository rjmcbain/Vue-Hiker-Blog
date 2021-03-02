<template>
  <div id="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostList";
import { ref } from "@vue/reactivity";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "Welcome to the blog",
        body:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quod repellat recusandae reiciendis, laboriosam labore sed aliquid quisquam esse quos.",
        id: 1,
      },
      { title: "Top 5 CSS tips", body: "Lorem ipsum", id: 2 },
    ]);
    return { posts };
  },
};
</script>

<style></style>
