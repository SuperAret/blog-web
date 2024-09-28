import { useEffect, useState } from 'react';
import { List } from 'antd';
import { fetchPosts } from '../api/postService';
import CommentForm from './Comments';


interface Post {
  _id: string;
  title: string;
  content: string;
  comments: { body: string; date: string }[];
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };
    getPosts();
  }, []);

  return (
    <List
      itemLayout="vertical"
      dataSource={posts}
      renderItem={(post) => (
        <List.Item key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <h4>Comments:</h4>
          {post.comments.map((comment, idx) => (
            <p key={idx}>{comment.body}</p>
          ))}
          <CommentForm postId={post._id} />
        </List.Item>
      )}
    />
  );
};

export default PostList;
