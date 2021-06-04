<template>
  <main class="pt-4 text-light">
    <div class="container">
      <div class="col-md-8 col-md-offset-2">
        <h1>Create post</h1>
        <div id="post-form" action="./index.html">
          <div class="form-group my-3">
            <label for="title ">Post title</label>
            <input
              v-model="title"
              maxlength="15"
              type="text"
              class="form-control"
              id="title"
            />
          </div>
          <div class="form-group my-3">
            <label for="description ">Text</label>
            <textarea
              v-model="text"
              rows="6"
              class="form-control"
              id="description"
            ></textarea>
          </div>
          <div class="form-group mt-5">
            <router-link
              to="/"
              @click="addPost()"
              type="submit"
              class="btn btn-warning m-1"
            >
              Create
            </router-link>
            <router-link to="/" type="submit" class="btn btn-warning m-1"
              >Home</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    addPost() {
      this.$store.commit("ADD_POST", { title: this.title, text: this.text });
    },
  },
};
</script>