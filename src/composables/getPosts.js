import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      // Simulates delay
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      const res = await projectFirestore
        .collection("posts")
        .orderBy("createdAt")
        .get();
      posts.value = res.docs.map((doc) => {
        // console.log(doc.data(), doc.id);
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
