<template>
  <main class="pt-5 text-dark text-center">
    <div class="mt-5 container">
      <div class="row" id="posts-container">
        <post
          v-for="(post, id) in $store.state.model.posts"
          v-bind:key="id"
          v-bind:post="post"
          v-bind:id="id"
        />
      </div>
      <div class="all-container d-flex flex-row justify-content-center edit">
        <router-link to="/newPost" class="btn btn-outline-dark" id="add"
          >Add Post</router-link
        >
      </div>
    </div>
  </main>
</template>
<script>
import post from "../components/post.vue";
export default {
  components: {
    post,
  },
  created() {
    this.$store.commit("LOAD");
  },
};
</script>
<style scoped>
.btn {
  background-color: #ffc107 !important;
  font-weight: 800;
}
</style>