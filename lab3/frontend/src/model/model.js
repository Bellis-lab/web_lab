export default class Model {
  constructor() {
    this.posts = [];
  }

  getPosts() {
    return this.posts;
  }

  getPost(id) {
    return this.posts[id];
  }

  async createPost(title, text) {
    const post = {
      title: title,
      description: text,
      comments: [],
    };

    this.posts.push(post);
    await this.sendPostsOnServer();
  }
  async delete(id) {
    this.posts.splice(id, 1);
    await this.sendPostsOnServer();
  }
  saveComment(id, newComment) {
    console.log(newComment);
    const comment = {
      username: "Mafioznik from Spain ",
      text: newComment,
    };
    console.log(comment);
    this.posts[id].comments.push(comment);
    console.log(this.posts);
  }
  async getPostsFromServer() {
    this.posts = [];
    await fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => {
        res.items.forEach((item) => {
          const post = {
            title: item.title,
            description: item.text,
            comments: [],
          };
          console.log("forom serv: ", item);
          this.posts.push(post);
        });
      });
  }
  async sendPostsOnServer() {
    await fetch("http://localhost:3000/set", {
      method: "POST",
      body: JSON.stringify({ posts: this.posts }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
