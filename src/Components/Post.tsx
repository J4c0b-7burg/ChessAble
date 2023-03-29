import { Link } from "react-router-dom";

interface ChessPost{
  id: string;
  title: string;
  type: string;
  date: string;
  image: string;
  notes: string;
  link: string;
}

const Post = (post: ChessPost) => {
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <h2>{post.date}</h2>
      <h2>{post.type}</h2>
      <div style={{width: "400px", height: "200px", objectFit: "contain"}}>
      <img src={post.image} alt="placeholder"></img>
      </div>
      <h2>{post.notes}</h2>
      <h2>{post.link}</h2>
    </div>
  );
};

export default Post