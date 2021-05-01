import * as api from "../api";
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  LIKE,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const CreatePost = (post) => async (dispatch) => {
  try {
    console.log(post);
    const { data } = await api.createPost(post);
    console.log(data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const update_post = (_id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(_id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const delete_post = (_id) => async (dispatch) => {
  try {
    await api.deletePost(_id);
    dispatch({ type: DELETE, payload: _id });
  } catch (error) {
    console.log(error.message);
  }
};

export const update_likedCount = (_id) => async (dispatch) => {
  try {
    const { data } = await api.updateLikeCount(_id);
    console.log(data);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

