import { Link, useLoaderData, Form } from "react-router-dom";

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
      <div style={{width: "400px"}}>
      <img src={post.image} alt="placeholder"></img>
      </div>
      <h2>{post.notes}</h2>
      <h2>{post.link}</h2>
      <div style={{ textAlign: "center" }}>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="title"
            placeholder="write Title here"
            defaultValue={post.title}
          />
          <input
            type="text"
            name="type"
            placeholder="enter type of chess game"
            defaultValue={post.type}
          />
          <input
            type="text"
            name="date"
            placeholder="enter date"
            defaultValue={post.date}
          />
          <input
            type="text"
            name="image"
            placeholder="enter image"
            defaultValue={post.image}
          />
          <input
            type="text"
            name="notes"
            placeholder="write Notes here"
            defaultValue={post.notes}
          />
          <input
            type="text"
            name="link"
            placeholder="add link"
            defaultValue={post.link}
          />
          <button>Update Chess</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Chess</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;