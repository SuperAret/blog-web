import { Layout } from 'antd';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const { Header, Content } = Layout;

const App = () => (
  <Layout>
    <Header className="header text-white font-semibold">Blog App</Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content mt-4">
        <PostForm />
        <PostList />
      </div>
    </Content>
  </Layout>
);

export default App;
