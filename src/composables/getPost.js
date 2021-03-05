import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      // Simulates delay
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      let res = await projectFirestore
        .collection("posts")
        .doc(id)
        .get();
      if (!res.exists) {
        throw Error("That post does not exist");
      }
      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;
