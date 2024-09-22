import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Form from "./components/Form";
import Post from "./components/Post";
import MainTemplate from "./components/MainTemplate";
import PostsList from "./components/PostsList";
import PostView from "./components/PostView";

export default function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <MainTemplate/>,
    children: [
      {
        path: '/',
        exact: true,
        element: <PostsList/>,
      },
      {
        path: '/posts/new',
        element: <Form id="0" content=""/>
      },
      {
        path: '/posts/:id',
        element: <PostView/>,
      },
    ]
  }]);

  return (
    <RouterProvider router={router} />
  );
}