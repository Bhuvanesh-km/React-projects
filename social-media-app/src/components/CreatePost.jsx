import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactions, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          Enter your userId
        </label>
        <input
          type="number"
          className="form-control"
          id="userId"
          placeholder="Your userID."
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today.."
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          post content
        </label>
        <textarea
          rows={3}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it."
          ref={postBodyElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Enter reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          placeholder="enter number of reactions."
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="enter tags using spaces."
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
