import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const fetchPosts = () => axios.get(API_URL);

export const createPost = (post: { title: string; content: string }) =>
  axios.post(API_URL, post);

export const addComment = (postId: string, comment: string) =>
  axios.post(`${API_URL}/comment`, { postId, comment });
