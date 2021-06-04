<template>
  <div class="col-12 col-xl-6 mb-5">
    <div class="row g-0">
      <div class="col-4">
        <img
          class="card-img-top shadow"
          src="../../public/images/post1.jpg"
          alt="Card image cap"
        />
      </div>
      <div class="col-8 bg-light">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">
            {{ post.description }}
          </p>
          <button @click="goToPage()" class="text-dark py-2">Details</button>
          <button @click="deletePost()" class="text-dark py-2">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
    id: {
      type: Number,
    },
  },
  methods: {
    goToPage() {
      this.$router.push({
        name: "postPage",
        params: {
          title: this.post.title,
          text: this.post.description,
          id: this.id,
        },
      });
    },
    deletePost() {
      this.$store.commit("DELETE", this.id);
    },
  },
};
</script>