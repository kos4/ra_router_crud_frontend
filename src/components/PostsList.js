import {useEffect, useState} from "react";
import Post from "./Post";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const url = '/posts';

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_API_URL + url);

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  const onDelete = id => {
    return false;
  }

  return (
    <div className="posts__list">
      {
        posts.map(item => <Post key={item.id} item={item} onDelete={onDelete} />)
      }
    </div>
  );
}