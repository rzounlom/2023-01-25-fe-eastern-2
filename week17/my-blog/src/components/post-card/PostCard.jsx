import "./PostCard.css";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="card-header ">
        <img src={post.imgUrl} alt="post header img" />
      </div>
      <div className="card-description ">
        <h4>{post.title}</h4> <Link></Link>
        <Link to={`/post/${post.id}`}>
          <Button size="sm" variant="outline-info">
            View Post
          </Button>
        </Link>
      </div>
      <div className="card-footer ">
        <p>Author: {post.author} </p>
        <p>Published: {post.publishedDate}</p>
      </div>
    </div>
  );
};

export default PostCard;
