import React, { useEffect } from "react";
import { Typography, Button } from "antd";

import Paginate from "../../common/Paginate";
import PostItem from "../../ui/PostItem/PostItem";
import { useState } from "react";
import { paginate } from "../../../utils/paginate";
import style from "./postsPage.module.scss";
import postsStore from "../../../store/PostsStore";
import { observer } from "mobx-react-lite";
import ModalPost from "../../ui/Modal";

const { Title } = Typography;

const PostsPage = observer(() => {
  const post = postsStore.posts;
  const isLoading = postsStore.isLoading;

  const count = post.length;
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const postCrop = paginate(post, currentPage, pageSize);

  return (
    <div className={style.posts_page}>
      <Title>Posts </Title>
      {post.length === 0 && (
        <Button onClick={() => postsStore.loadPosts()} type="primary">
          Download Posts
        </Button>
      )}

      {post.length !== 0 && (
        <>
          {!isLoading ? (
            <>
              <Button type="primary" onClick={showModal}>
                Create Post
              </Button>

              <ModalPost {...{ isModalOpen, handleOk, handleCancel }} />

              <div className={style.posts_page__item_wrapper}>
                {postCrop.map((post) => (
                  <PostItem key={post.id} {...{ post }} />
                ))}
              </div>

              <div className={style.posts_page__paginate}>
                <Paginate
                  itemsCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : (
            "Loading..."
          )}
        </>
      )}
    </div>
  );
});

export default PostsPage;
