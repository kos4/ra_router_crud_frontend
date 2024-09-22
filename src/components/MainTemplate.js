import {
  Outlet
} from "react-router-dom";
import LinkPostAdd from "./LinkPostAdd";

export default function MainTemplate() {
  return (
    <div className="posts">
      <div className="posts__head">
        <LinkPostAdd href="/posts/new"/>
      </div>
      <Outlet/>
    </div>
  );
}