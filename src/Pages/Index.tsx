import Post from "../Components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props: any) => {
  const chess: any = useLoaderData()

  return <>
  <div className="main">
  <h1 className="TitleBar">ChessAble</h1>
  <div className="dropdown">
      <span>
        <img className="dropdownImg" src="https://static.vecteezy.com/system/resources/previews/013/169/203/original/website-navigation-menu-icons-hamburger-menu-symbol-flat-website-menu-icons-with-rounded-and-sharp-edges-png.png"></img>
      </span>
        <div className="dropdown-content">
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
  </div>
  </div>
  {chess.map((post: any) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;