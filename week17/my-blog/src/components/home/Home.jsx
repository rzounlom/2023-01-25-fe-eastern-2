import "./Home.css";

import PostCardList from "../post-card-list/PostCardList";
import { featuredPosts } from "../../data/posts";

const Home = ({ posts }) => {
  return (
    <div className="home">
      <div className="heading">
        <h1>Welcome to my Travel Blog</h1>
      </div>
      <div className="featured-posts">
        <PostCardList featured posts={posts} />
      </div>
    </div>
  );
};

export default Home;
