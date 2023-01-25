import React from "react";
import { useParams } from "react-router-dom";
import PostPage from "../pages/PostPage/PostPage";
import PostsPage from "../pages/PostsPage/PostsPage";

const PostLayout = () => {
  const { postId } = useParams();

  return <>{postId ? <PostPage {...{ postId }} /> : <PostsPage />}</>;
};

export default PostLayout;
