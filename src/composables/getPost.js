import { ref } from "@vue/reactivity";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      // Simulates delay
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      let data = await fetch(`http://localhost:5000/posts/${id}`);
      console.log(data);
      if (!data.ok) {
        throw Error("That post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;
