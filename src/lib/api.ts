import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

export type Post = { id: number; userId: number; title: string; body: string };
export type User = { id: number; name: string; username: string; email: string };
export type Comment = { id: number; postId: number; name: string; email: string; body: string };

export async function fetchPosts() {
  const { data } = await api.get<Post[]>('/posts');
  return data;
}

export async function fetchUsers() {
  const { data } = await api.get<User[]>('/users');
  return data;
}

export async function fetchPost(id: string) {
  const { data } = await api.get<Post>(`/posts/${id}`);
  return data;
}

export async function fetchUser(userId: number) {
  const { data } = await api.get<User>(`/users/${userId}`);
  return data;
}

export async function fetchComments(postId: string) {
  const { data } = await api.get<Comment[]>(`/comments`, { params: { postId } });
  return data;
}