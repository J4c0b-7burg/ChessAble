import { Link, useLoaderData } from "react-router-dom";

// interface ChessPost{
//   id: string;
//   title: string;
//   type: string;
//   date: string;
//   image: string;
//   notes: string;
//   link: string;
// }

const Show = (post: any) => {
  // const post = useLoaderData();

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.type}</h2>
      <h2>{post.date}</h2>
      <img src={post.image} alt="placeholder"></img>
      <h2>{post.notes}</h2>
      <h2>{post.link}</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;