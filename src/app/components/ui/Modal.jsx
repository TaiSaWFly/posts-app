import React, { useState } from "react";
import { Modal, Button } from "antd";
import postsService from "../../services/posts.service";

const ModalPost = ({ isModalOpen, handleOk, handleCancel }) => {
  const somePost = {
    userId: 10,
    id: 101,
    title: "some Post",
    body: "some Post desc",
  };

  const [succes, setSucces] = useState(null);

  const createNewPost = async () => {
    try {
      const data = await postsService.createPost(somePost);
      console.log(data);
      setSucces(true);
    } catch (error) {
      console.log(error.message);
      setSucces(false);
    }
  };

  const handleModalOk = () => {
    handleOk();
    setSucces(null);
  };

  const handleModalCancel = () => {
    handleCancel();
    setSucces(null);
  };

  return (
    <Modal
      title="Create Post"
      open={isModalOpen}
      onOk={handleModalOk}
      onCancel={handleModalCancel}>
      <p>
        {succes === null
          ? "Some contents..."
          : succes
          ? "Post Created See On console.log"
          : "Post Not Created See Error On console.log"}
      </p>
      <Button
        type={"primary"}
        danger={succes === null ? false : succes ? false : true}
        onClick={createNewPost}>
        {succes === null
          ? "Create New Post"
          : succes
          ? "Post Created"
          : "Post Not Created"}
      </Button>
    </Modal>
  );
};

export default ModalPost;
