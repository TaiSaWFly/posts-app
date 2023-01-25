import { makeAutoObservable } from "mobx";
import postsService from "../services/posts.service";

class PostsStore {
  posts = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  async loadPosts() {
    this.isLoading = true;
    try {
      const data = await postsService.getList();
      this.posts = [...this.posts, ...data];
    } catch (error) {
      console.log(error);
    }

    this.isLoading = false;
  }

  getPost(id) {
    const post = this.posts.find((p) => p.id.toString() === id);

    if (post === undefined) {
      this.loadPosts();
    }

    return post;
  }
}

export default new PostsStore();
