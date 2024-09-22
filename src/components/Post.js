import moment from "moment";
import {Link} from "react-router-dom";

export default function Post({item}) {
  const date = moment(item.created);
  const linkEdit = `/posts/${item.id}`;

  return (
    <div className="posts__item">
      <div className="posts__item-actions">
        <Link className="posts__button-link" to={linkEdit}>View</Link>
      </div>

      <div className="posts__item-date">{date.format('DD.MM.YYYY HH:mm:ss')}</div>
      <div className="posts__item-text">
        {item.content}
      </div>
    </div>
  );
}