import {Link} from "react-router-dom";
import Entity from "../api/Entity";

export default function Form({id, content}) {
  const onSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const formData = Object.fromEntries(new FormData(form).entries());
    const entity = new Entity();
    entity.addPost(formData, handlerSubmit)
  };

  const handlerSubmit = res => {
    if (res.ok) {
      window.location = '/';
    } else {
      console.log(res.statusText);
    }
  };

  return (
    <form className="posts__form" action="" onSubmit={onSubmit}>
      <input type="hidden" value={id}/>
      <textarea className="posts__form-textarea" name="content" defaultValue={content}/>
      <div className="posts__form-buttons">
        <button className="posts__form-button">Add</button>
        <Link className="posts__button-link" to="/">Cancel</Link>
      </div>
    </form>
  );
}