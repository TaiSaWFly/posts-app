import React from "react";
import postsStore from "../../store/PostsStore";
import { observer } from "mobx-react-lite";
import { Button, Typography, Space } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;

const MainPage = observer(() => {
  return (
    <div>
      <Title>MainPage</Title>

      <Space>
        {postsStore.posts.length !== 0 ? (
          <>
            <span>Posts Loaded</span>
            <Button type="link">
              <Link to="/post">Posts</Link>
            </Button>
          </>
        ) : (
          <Button onClick={() => postsStore.loadPosts()} type="primary">
            Download Posts
          </Button>
        )}
      </Space>
    </div>
  );
});

export default MainPage;
