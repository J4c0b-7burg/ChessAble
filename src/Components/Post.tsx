import { Link } from "react-router-dom";

// interface ChessPost{
//   id: string;
//   title: string;
//   type: string;
//   date: string;
//   image: string;
//   notes: string;
//   link: string;
// }

const Post = (res: any) => {
  let {post} = res;
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
      <Link to={`${post.link}`}>
        <h1>{post.link}</h1>
      </Link>
    </div>
  );
};

export default Post