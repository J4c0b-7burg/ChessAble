import Post from "../Components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

// interface ChessProps{
//   id: string;
//   title: string;
//   type: string;
//   date: string;
//   image: string;
//   notes: string;
//   link: string;
// }

// interface ChessPost{
//   id: string;
//   title: string;
//   type: string;
//   date: string;
//   image: string;
//   notes: string;
//   link: string;
//   key: string;
// }

const Index = (props: any) => {
  const chess: any = useLoaderData()

  return <>
  <div>
  <h2>Add Chess Game</h2>
  <Form action="/create" method="post">
      <input type="text" name="title" placeholder="write Tilte here"/>
      <input type="text" name="type" placeholder="add type of chess game"/>
      <input type="text" name="date" placeholder="add date"/>
      <input type="text" name="image" placeholder="add image address"/>
      <input type="text" name="notes" placeholder="add notes here"/>
      <input type="text" name="link" placeholder="add chess game link"/>
      <button>Add Chess</button>
  </Form>
  </div>
  {chess.map((post: any) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;