import React from "react";
import postsStore from "../../../store/PostsStore";
import { observer } from "mobx-react-lite";
import Title from "antd/es/typography/Title";
import style from "./postPage.module.scss";
import { Divider, Image, Typography, Button } from "antd";
import User from "../../ui/User/User";
import Card from "antd/es/card/Card";
import { useHistory } from "react-router-dom";

const { Paragraph } = Typography;

const PostPage = observer(({ postId }) => {
  const history = useHistory();
  const post = postsStore.getPost(postId);

  const handleRedirect = () => {
    history.push("/post");
  };

  return (
    <div className={style.post_page}>
      {post ? (
        <>
          <Title level={3}>Post</Title>

          <Divider />

          <div className={style.post_page__info}>
            <Button onClick={handleRedirect} type="primary">
              Back to Posts
            </Button>

            <div className={style.post_page__user}>
              <Card>
                <User userId={post.userId} />
              </Card>
            </div>
          </div>

          <div className={style.post_page__title}>
            <Title level={2} italic={true}>
              {post.title}
            </Title>
          </div>

          <Divider />

          <div className={style.post_page__content}>
            <div className={style.post_page__content_img}>
              <Image
                src={`https://picsum.photos/1500/1500.jpg?random=${post.id}`}
              />
            </div>

            <div className={style.post_page__content_body}>
              <Paragraph>{post.body}</Paragraph>
            </div>
          </div>

          <Divider />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
});

export default PostPage;
