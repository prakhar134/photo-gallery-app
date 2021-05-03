import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });
//const url = "https://photo-gallery-app-1.herokuapp.com/posts";

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (_id, updatePost) =>
  API.patch(`/posts/${_id}`, updatePost);
export const deletePost = (_id) => API.delete(`/posts/${_id}`);
export const updateLikeCount = (_id) => API.patch(`posts/${_id}/likedPost`);

export const user_signin = (formData) => API.post("/user/signin", formData);
export const user_signup = (formData) => API.post("/user/signup", formData);
