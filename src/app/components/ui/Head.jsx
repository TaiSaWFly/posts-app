import React from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Head = () => {
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    // backgroundColor: "#7dbcea",
  };
  return (
    <Header style={headerStyle}>
      <Button type="link">
        <Link to="/">Main</Link>
      </Button>
      <Button type="link">
        <Link to="/post">Posts</Link>
      </Button>
    </Header>
  );
};

export default Head;
