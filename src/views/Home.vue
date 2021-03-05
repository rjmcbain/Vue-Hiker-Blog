<template>
  <div id="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList v-if="showPosts" :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
    <!-- <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Post</button> -->
  </div>
</template>

<script>
import PostList from "../components/PostList";
import { ref } from "@vue/reactivity";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";
import TagCloud from "../components/TagCloud";
export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    const showPosts = ref(true);
    return { posts, showPosts, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
