import { Link } from "react-router-dom";

const Post = (res: any) => {
  let {post} = res;
  return (
    <div className="post">
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <h2>{post.date}</h2>
      <h2>{post.type}</h2>
      <img src={post.image} alt="placeholder"></img>
      <h2>{post.notes}</h2>
      <Link to={`${post.link}`}>
        <h1>{post.link}</h1>
      </Link>
    </div>
  );
};

export default Post