import createRequest from "./createRequest";

export default class Entity {
  addPost(data, callback) {
    const opt = {
      input: '/posts',
      init: {
        method: 'POST',
        body: JSON.stringify(data),
      },
      callback,
    };

    createRequest(opt);
  }

  deletePost(id, callback) {
    const opt = {
      input: `/posts/${id}`,
      init: {
        method: 'DELETE',
      },
      callback,
    };

    createRequest(opt);
  }
}