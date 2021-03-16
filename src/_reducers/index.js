import { portfolio1, portfolio2, portfolio3 } from "../components/config";
import produce from "../util/produce";

const initialState = {
  theme: "light",
  header: "blog",
  portfolios: null,
  portfolio: [],
  prePortfolio: [],
  postPortfolio: [],
  onAbout: false,
  user:null,
  onSignUpPage:false,

  logInLoading: false,
  logInDone: false,
  logInError: null,

  logOutLoading: false,
  logOutDone: false,
  logOutError: null,

  loadInfoLoading: false,
  loadInfoDone: false,
  loadInfoError: null,

  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

export const MODE_CHANGE = "MODE_CHANGE";
export const LOAD_PORTFOLIOS = "LOAD_PORTFOLIOS";
export const LOAD_PORTFOLIO = "LOAD_PORTFOLIO";
export const LOAD_PREPORTFOLIO = "LOAD_PREPORTFOLIO";
export const LOAD_POSTPORTFOLIO = "LOAD_PSTPORTFOLIO";
export const CHAGE_HEADER = "CHAGE_HEADER";
export const SWITCH_ABOUT = "SWITCH_ABOUT";
export const ON_ABOUT = "ON_ABOUT";
export const OFF_ABOUT = "OFF_ABOUT";
export const ON_SIGN_UP_PAGE = "ON_SIGN_UP_PAGE"

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_IN_CLEAR = "LOG_IN_CLEAR";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
export const LOG_OUT_CLEAR = "LOG_OUT_CLEAR";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const SIGN_UP_CLEAR = "SIGN_UP_CLEAR";

export const LOAD_INFO_REQUEST = "LOAD_INFO_REQUEST";
export const LOAD_INFO_SUCCESS = "LOAD_INFO_SUCCESS";
export const LOAD_INFO_FAILURE = "LOAD_INFO_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case MODE_CHANGE:
        draft.theme = action.data;
        break;
      case LOAD_PORTFOLIOS:
        draft.portfolios = [portfolio1, portfolio2, portfolio3];
        break;
      case LOAD_PORTFOLIO:
        draft.portfolios = [portfolio1, portfolio2, portfolio3];
        draft.portfolio = draft.portfolios[action.id];
        break;
      case CHAGE_HEADER:
        draft.header = action.header;
        break;
      case SWITCH_ABOUT:
        draft.onAbout = !draft.onAbout;
        break;
      case ON_ABOUT:
        draft.onAbout = true;
        break;
      case OFF_ABOUT:
        draft.onAbout = false;
        break;
      case ON_SIGN_UP_PAGE:
        draft.onSignUpPage = action.data;
        break;
        case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS: 
        draft.logInLoading = false;
        draft.user = action.data;
        draft.logInDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_IN_CLEAR:
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
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
      case LOG_OUT_CLEAR:
        draft.logOutError = null;
        draft.logOutDone = false;
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
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.onSignUpPage = false;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case SIGN_UP_CLEAR:
          draft.signUpError = null;
          draft.signUpDone = false;
        break;
      default:
        return state;
    }
  });

export default reducer;
