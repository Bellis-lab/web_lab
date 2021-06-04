<template>
  <main class="pt-5">
    <div id="post-container" class="mt-5 container">
      <div class="row flex-column flex-lg-row justify-content-center">
        <img
          src="../../public/images/post1.jpg"
          class="col-12 col-lg-5 img-fluid order-1"
          alt="Responsive image"
        />
      </div>
      <div class="col-12 text-light">
        <h1 class="display-1 fw-bold">{{ title }}</h1>
        <p class="lead">{{ text }}</p>
      </div>
    </div>
    <div id="comments-container" class="mt-5 text-start container text-light">
      <div
        id="comment-form"
        class="rounded row justify-content-md-center bg-light text-dark mb-3"
      >
        <div class="col-12 text-start">
          <div class="row">
            <div class="col mx-2">
              <h4>New comment:</h4>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <textarea
                v-model="newComment"
                class="col-12 p-2"
                style="resize: none"
                id="text"
              ></textarea>
            </div>
          </div>

          <div class="row">
            <div class="col my-2">
              <button
                @click="saveComment()"
                type="submit"
                class="btn btn-warning"
              >
                Save comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3>Comments</h3>
      <div
        v-for="comment in $store.state.model.posts[id].comments"
        v-bind:key="comment"
        class="rounded row justify-content-md-center bg-light text-dark mb-3"
      >
        <div class="col-1 pb-3">
          <img
            src="../../public/images/kizaru-pauk-shablon.png"
            alt="avatar"
            class="border border-dark mt-3 rounded-circle"
            width="70"
          />
        </div>
        <div class="col-11 text-start">
          <div class="row">
            <div class="col mt-2 mx-2">
              <h4>{{ comment.username }}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="col text-wrap">{{ comment.text }}</p>
            </div>
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
      newComment: "",
    };
  },
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  created() {},
  methods: {
    saveComment() {
      console.log(this.newComment);
      this.$store.commit("SAVE_COMMENT", {
        id: this.id,
        comment: this.newComment,
      });
    },
  },
};
</script>