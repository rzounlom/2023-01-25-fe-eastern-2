import "./PostCardList.css";

import PostCard from "../post-card/PostCard";

const PostCardList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="post-card-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostCardList;
