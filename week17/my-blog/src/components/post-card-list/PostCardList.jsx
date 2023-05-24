import "./PostCardList.css";

import PostCard from "../post-card/PostCard";

const PostCardList = ({ featured, posts }) => {
  console.log(posts);

  if (featured) {
    return (
      <div className="post-card-list">
        {posts
          .filter((post) => post.id < "5")
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    );
  } else
    return (
      <div className="post-card-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
};

export default PostCardList;
