import axios from "axios";

const url = "https://photo-gallery-app-1.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (_id, updatePost) =>
  axios.patch(`${url}/${_id}`, updatePost);
export const deletePost = (_id) => axios.delete(`${url}/${_id}`);
export const updateLikeCount = (_id) => axios.patch(`${url}/${_id}/likedPost`);
