import {Link} from "react-router-dom";
import moment from "moment";
import Entity from "../api/Entity";

export default function PostDetails(item) {
  const date = moment(item.created);
  const link = `/`;
  const onDelete = id => {
    const entity = new Entity();
    entity.deletePost(id, handlerDelete);
  };
  const handlerDelete = res => {
    if (res.ok) {
      window.location = link;
    } else {
      console.log(res.statusText)
    }
  }

  return (
    <div className="posts__item">
      <div className="posts__item-actions">
        <Link className="posts__button-link" to={link}>Back</Link>
        <button className="posts__item-button" type="button" onClick={() => onDelete(item.id)}>Delete</button>
      </div>

      <div className="posts__item-date">{date.format('DD.MM.YYYY HH:mm:ss')}</div>
      <div className="posts__item-text">
        {item.content}
      </div>
    </div>
  );
}