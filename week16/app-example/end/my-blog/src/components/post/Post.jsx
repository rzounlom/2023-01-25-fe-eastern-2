import "./Post.css";

import { Link, useParams } from "react-router-dom";

import { Button } from "react-bootstrap";
import { posts } from "../../data/posts";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);
  return (
    <div className="post-container">
      <div className="go-back">
        <Link to="/posts">
          <Button size="md" variant="outline-info">
            Back
          </Button>
        </Link>
      </div>
      <div className="post">
        <div className="post-header">
          <img src={`${post.imgUrl}`} alt="sing post header img" />
        </div>
        <div className="post-description">
          <p>Author: {post.author} </p>
          <p>Published: {post.publishedDate}</p>
        </div>
        <div className="post-text">{post.text}</div>
      </div>
    </div>
  );
};

export default Post;
