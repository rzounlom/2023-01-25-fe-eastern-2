import "./Posts.css";

import PostCardList from "../post-card-list/PostCardList";
import { posts } from "../../data/posts";

const Posts = () => {
  return (
    <div className="posts">
      <div className="heading">
        <h1>All Posts</h1>
      </div>
      <div className="posts-container">
        <PostCardList posts={posts} />
      </div>
    </div>
  );
};

export default Posts;
