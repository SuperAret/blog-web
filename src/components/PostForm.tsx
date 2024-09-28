import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { createPost } from '../api/postService';


const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    try {
      await createPost({ title, content });
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Failed to create post', error);
    }
  };

  return (
    <div className=''>
        <Form onFinish={handleSubmit}>
          <Form.Item label="Title" layout='vertical' className='md:mb-10'>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className=''/>
          </Form.Item>
          <Form.Item label="Content" layout='vertical' className='md:mt-2' >
            <Input.TextArea value={content} onChange={(e) => setContent(e.target.value)}className=''/>
          </Form.Item>
          <Button type="primary" htmlType="submit"
            className='md:mt-12 '
          >
            Save Post
          </Button>
    </Form>
    </div>
    
  );
};

export default PostForm;
