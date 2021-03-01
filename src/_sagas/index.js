import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  EDIT_POST_FAILURE,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_INFO_FAILURE,
  LOAD_INFO_REQUEST,
  LOAD_INFO_SUCCESS,
  LOAD_KEYWORD_POSTS_FAILURE,
  LOAD_KEYWORD_POSTS_REQUEST,
  LOAD_KEYWORD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
} from "../_reducers";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function logInAPI(data) {
  // ========= 1. route user 로
  return axios.post("/api/user/logIn", data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      // put 은 dispatch 랑 일맥상통 하지만 여러번 하게 해줌 yield 는 await 같은 느낌
      type: LOG_IN_SUCCESS,
      data: result.data, // 왜 action이 아닌가? 서버로 부터 사용자 정보를 받아오기 때문
    }); // ===========3. after 1s aciton dispatch
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  // ========= 1. route user 로
  return axios.post("/api/user/logOut");
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      // put 은 dispatch 랑 일맥상통 하지만 여러번 하게 해줌 yield 는 await 같은 느낌
      type: LOG_OUT_SUCCESS, // 왜 action이 아닌가? 서버로 부터 사용자 정보를 받아오기 때문
    }); // ===========3. after 1s aciton dispatch
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post("/api/post", data); // get delete 는 data 못넘김 put fetch post 가능
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostsAPI(data) {
  return axios.get(`/api/post`); // get delete 는 data 못넘김 put fetch post 가능
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostAPI(data) {
  return axios.get(`/api/post/${data}`); // get delete 는 data 못넘김 put fetch post 가능
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function loadInfoAPI() {
  return axios.get("/api/user"); // get delete 는 data 못넘김 put fetch post 가능
}

function* loadInfo(action) {
  try {
    const result = yield call(loadInfoAPI);
    yield put({
      type: LOAD_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadImagesAPI(data) {
  return axios.post("/api/post/images", data); // get delete 는 data 못넘김 put fetch post 가능
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function loadHashtagPostsAPI(data) {
  return axios.get(`api/post/hashtag/${encodeURIComponent(data)}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data);
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

function loadKeywordPostsAPI(data) {
  return axios.get(`api/post/keyword/${encodeURIComponent(data)}`);
}

function* loadKeywordPosts(action) {
  try {
    const result = yield call(loadKeywordPostsAPI, action.data);
    yield put({
      type: LOAD_KEYWORD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_KEYWORD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.post(`api/post/delete`, data);
}

function* removePost(action) {
  console.log("ggg", action.data);
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function editPostAPI(data) {
  return axios.post(`api/post/edit`, data);
}

function* editPost(action) {
  try {
    const result = yield call(editPostAPI, action.data);
    console.log(result);
    yield put({
      type: EDIT_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: EDIT_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchLoadInfo() {
  yield takeLatest(LOAD_INFO_REQUEST, loadInfo);
}
function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
function* watchLoadHashtagPosts() {
  yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}
function* watchLoadKeywordPosts() {
  yield takeLatest(LOAD_KEYWORD_POSTS_REQUEST, loadKeywordPosts);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchEditPost() {
  yield takeLatest(EDIT_POST_REQUEST, editPost);
}

export default function* rootSaga() {
  yield all([
    fork(watchLogOut),
    fork(watchAddPost),
    fork(watchLoadPosts),
    fork(watchLoadPost),
    fork(watchLoadInfo),
    fork(watchLogIn),
    fork(watchUploadImages),
    fork(watchLoadHashtagPosts),
    fork(watchLoadKeywordPosts),
    fork(watchRemovePost),
    fork(watchEditPost),
  ]);
}
