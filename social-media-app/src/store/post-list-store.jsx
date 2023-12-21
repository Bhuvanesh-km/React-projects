import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [];

export const PostList = createContext({
  postList: DEFAULT_POST_LIST,
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INIT_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispathPostList] = useReducer(postListReducer, []);
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispathPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispathPostList({
      type: "ADD_INIT_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispathPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
