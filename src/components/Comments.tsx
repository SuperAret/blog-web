import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { addComment } from '../api/postService';

const CommentForm: React.FC<{ postId: string }> = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    try {
      await addComment(postId, comment);
      setComment('');
    } catch (error) {
      console.error('Failed to add comment', error);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Add a Comment">
        <Input.TextArea value={comment} onChange={(e) => setComment(e.target.value)} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CommentForm;
