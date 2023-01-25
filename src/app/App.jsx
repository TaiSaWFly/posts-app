import { Link, Route, Switch } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import PageLayout from "./components/layouts/PageLayout";
import Head from "./components/ui/Head";
import { Layout, Space } from "antd";
import PostLayout from "./components/layouts/PostLayout";

function App() {
  return (
    <>
      <Head />
      <Layout>
        <PageLayout>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/post/:postId?" component={PostLayout} />
          </Switch>
        </PageLayout>
      </Layout>
    </>
  );
}

export default App;
