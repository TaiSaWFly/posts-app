import React from "react";
import { Layout, Space } from "antd";
const { Content } = Layout;

const PageLayout = ({ children }) => {
  const contentStyle = {
    paddingTop: "20px",
    paddingBottom: "20px",
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#000",
    // backgroundColor: "#108ee9",
  };

  return (
    <div className="conteiner">
      <Space
        direction="vertical"
        style={{
          width: "100%",
          display: "flex",
        }}
        size={[2]}>
        <Content style={contentStyle}>{children}</Content>
      </Space>
    </div>
  );
};

export default PageLayout;
