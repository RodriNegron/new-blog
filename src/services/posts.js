import axios from "axios";

export const getAllPosts = async () => {
  const request = axios.get("https://jsonplaceholder.typicode.com/posts");
  return request.then((response) => response.data);
};

export const detail = (id) => {
  const request = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return request.then((response) => response.data);
};

export const createPost = (newObject) => {
  const request = axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newObject
  );
  return request.then((response) => response.data);
};

export const updatePost = (id, newObject) => {
  const request = axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    newObject
  );
  return request.then((response) => response.data);
};

export const deletePost = (id) => {
  const request = axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return request.then((response) => response.data);
};
