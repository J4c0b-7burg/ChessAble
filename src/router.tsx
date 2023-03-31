import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  import App from "./App";
  import { indexLoader, showLoader } from "./loaders";
  import Index from "./Pages/Index";
  import Show from "./Pages/Show";
  import { createAction, updateAction, deleteAction } from "./actions";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App/>}>
          <Route path="" element={<Index/>} loader={indexLoader} />
          <Route path="post/:id" element={<Show/>} loader={showLoader} />
          <Route path="create" action={createAction}/>
          <Route 
            path="update/:id" 
            /* @ts-ignore */
            action={updateAction}
          />
          <Route path="delete/:id" action={deleteAction}/>
        </Route>
      </>
    )
  );
  
  export default router;