import produce from "../util/produce";

const initialState = {
  posts: [],
  hashtags: [],
  user: null,
  prevPost: null,
  post: null,
  nextPost: null,
  postIntro: "Hi! I'm a Web-developer 💻",
  imagePaths: [],
  pageNumber: 0,
  posterName: "Mainpage",
  currentPage: 0,
  theme: "light",

  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,

  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,

  logInLoading: false,
  logInDone: false,
  logInError: null,

  logOutLoading: false,
  logOutDone: false,
  logOutError: null,

  loadInfoLoading: false,
  loadInfoDone: false,
  loadInfoError: null,

  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,

  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  editPostLoading: false,
  editPostDone: false,
  editPostError: null,

  hasMorePosts: true,
};

export const PAGE_CHANGE = "PAGE_CHANGE";
export const LOAD_NAV_INFO = "LOAD_NAV_INFO";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const LOAD_INFO_REQUEST = "LOAD_INFO_REQUEST";
export const LOAD_INFO_SUCCESS = "LOAD_INFO_SUCCESS";
export const LOAD_INFO_FAILURE = "LOAD_INFO_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

export const LOAD_KEYWORD_POSTS_REQUEST = "LOAD_KEYWORD_POSTS_REQUEST";
export const LOAD_KEYWORD_POSTS_SUCCESS = "LOAD_KEYWORD_POSTS_SUCCESS";
export const LOAD_KEYWORD_POSTS_FAILURE = "LOAD_KEYWORD_POSTS_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";

export const STOP_ADD_POST = "STOP_ADD_POST";

export const REMOVE_IMAGE = "REMOVE_IMAGE";
export const REMOVE_POST_ROLLBACK = "REMOVE_POST_ROLLBACK";
export const EDIT_IAMGE_LOAD = "EDIT_IAMGE_LOAD";
export const MODE_CHANGE = "MODE_CHANGE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PAGE_CHANGE:
        draft.pageNumber = action.pageNumber;
        draft.posterName = action.posterName;
        draft.postIntro = action.postIntro;
        break;
      case LOAD_NAV_INFO:
        draft.pageNumber = action.data.pageNumber;
        draft.posterName = action.data.posterName;
        draft.postIntro = action.data.postIntro;
        break;
      case SET_CURRENT_PAGE:
        draft.currentPage = action.data;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostError = null;
        draft.addPostDone = false;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.posts.unshift(action.data);
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case LOAD_POSTS_REQUEST:
      case LOAD_KEYWORD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = null;
        draft.loadPostsError = false;
        break;
      case LOAD_POSTS_SUCCESS:
      case LOAD_KEYWORD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.posts = action.data.posts;
        draft.hashtags = action.data.hashtags;
        draft.hasMorePosts = false;
        break;
      case LOAD_POSTS_FAILURE:
      case LOAD_KEYWORD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = null;
        draft.loadPostsError = false;
        break;
      case LOAD_HASHTAG_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.posts = action.data;
        draft.hasMorePosts = true;
        break;
      case LOAD_HASHTAG_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = null;
        draft.loadPostError = false;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.post = action.data.post;
        draft.prevPost = action.data.prevPost;
        draft.nextPost = action.data.nextPost;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = null;
        draft.logInError = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.user = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = null;
        draft.logOutError = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.user = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case LOAD_INFO_REQUEST:
        draft.loadInfoLoading = true;
        draft.loadInfoDone = null;
        draft.loadInfoError = false;
        break;
      case LOAD_INFO_SUCCESS:
        draft.loadInfoLoading = false;
        draft.loadInfoDone = true;
        draft.user = action.data;
        break;
      case LOAD_INFO_FAILURE:
        draft.loadInfoLoading = false;
        draft.loadInfoError = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = null;
        draft.uploadImagesError = false;
        break;
      case UPLOAD_IMAGES_SUCCESS:
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        draft.imagePaths = action.data;
        break;
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.posts = draft.posts.filter((v) => v.id !== action.data.PostId);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case EDIT_POST_REQUEST:
        draft.editPostLoading = true;
        draft.editPostDone = false;
        draft.editPostError = null;
        break;
      case EDIT_POST_SUCCESS:
        draft.editPostLoading = false;
        draft.editPostDone = true;
        break;
      case EDIT_POST_FAILURE:
        draft.editPostLoading = false;
        draft.editPostError = action.error;
        break;
      case REMOVE_IMAGE:
        draft.imagePaths = "";
        break;
      case EDIT_IAMGE_LOAD:
        draft.imagePaths = [action.data];
        break;
      case MODE_CHANGE:
        draft.theme = action.data;
        break;
      case REMOVE_POST_ROLLBACK:
        draft.removePostLoading = false;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      default:
        return state;
    }
  });

export default reducer;
