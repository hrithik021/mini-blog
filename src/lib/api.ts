import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

// Types
export type Post = { id: number; userId: number; title: string; body: string };
export type User = { id: number; name: string; username: string; email: string };
export type Comment = { id: number; postId: number; name: string; email: string; body: string };

// Endpoints (for consistency)
const endpoints = {
  posts: "/posts",
  users: "/users",
  comments: "/comments",
} as const;

// Safe API getter
async function safeGet<T>(url: string, params?: object): Promise<T> {
  try {
    const { data } = await api.get<T>(url, { params });
    return data;
  } catch (err) {
    console.error(`API GET ${url} failed`, err);
    throw new Error("Failed to fetch data from API");
  }
}

// API functions
export const fetchPosts = () => safeGet<Post[]>(endpoints.posts);
export const fetchUsers = () => safeGet<User[]>(endpoints.users);
export const fetchPost = (id: string) => safeGet<Post>(`${endpoints.posts}/${id}`);
export const fetchUser = (userId: number) => safeGet<User>(`${endpoints.users}/${userId}`);
export const fetchComments = (postId: string) =>
  safeGet<Comment[]>(endpoints.comments, { postId });
