import {useEffect, useState} from "react";
import {
  useParams
} from "react-router-dom";
import PostDetails from "./PostDetails";

export const loader = ({ params }) => {
  const id = +params.id
  return {
    id
  }
}

export default function PostView() {
  const [item, setItem] = useState(null);
  const {id} = useParams();
  const url = `/posts/${id}`;

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_API_URL + url);

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        setItem(data.post);
      } catch (error) {
        console.log(error);
      }
    };

    getPost();
  }, []);

  return (
    <>
      {item && <PostDetails {...item}/>}
      {!item && 'Пост не найден!'}
    </>
  );
}