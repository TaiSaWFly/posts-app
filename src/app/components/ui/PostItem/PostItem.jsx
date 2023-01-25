import React from "react";
import style from "./postItem.module.scss";
import { Card, Typography, Divider } from "antd";
import User from "../User/User";
import { useHistory } from "react-router-dom";

const { Meta } = Card;
const { Paragraph } = Typography;

const PostItem = ({ post }) => {
  const history = useHistory();

  const handleRedirect = (id) => {
    history.push(`/post/${id}`);
  };

  return (
    <div className={style.post_item}>
      <Card
        hoverable
        onClick={() => handleRedirect(post.id)}
        cover={
          <img
            alt="example"
            src={`https://picsum.photos/1500/1500.jpg?random=${post.id}`}
          />
        }>
        <div className={style.post_item__title}>
          <Meta title={post.title} />
        </div>

        <Paragraph
          ellipsis={{
            rows: 4,
          }}>
          {post.body}
        </Paragraph>

        <Divider />

        <User userId={post.userId} />
      </Card>
    </div>
  );
};

export default PostItem;
