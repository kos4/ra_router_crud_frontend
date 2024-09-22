import { Link } from "react-router-dom";

export default function LinkPostAdd({href}) {
  return (
    <Link className="posts__add" to={href}>Создать пост</Link>
  );
}