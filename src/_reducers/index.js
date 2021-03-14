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
      default:
        return state;
    }
  });

export default reducer;
