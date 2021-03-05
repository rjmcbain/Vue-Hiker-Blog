import { ref } from "@vue/reactivity";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      // Simulates delay
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      let data = await fetch("http://localhost:5000/posts");
      // console.log(data);
      if (!data.ok) {
        throw Error("No Data Available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
