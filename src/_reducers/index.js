import { portfolio1, portfolio2, portfolio3 } from "../components/config";
import produce from "../util/produce";

const initialState = {
  theme: "light",
  portfolios: null,
  portfolio: [],
  prePortfolio: [],
  postPortfolio: [],
};

export const MODE_CHANGE = "MODE_CHANGE";
export const LOAD_PORTFOLIOS = "LOAD_PORTFOLIOS";
export const LOAD_PORTFOLIO = "LOAD_PORTFOLIO";
export const LOAD_PREPORTFOLIO = "LOAD_PREPORTFOLIO";
export const LOAD_POSTPORTFOLIO = "LOAD_PSTPORTFOLIO";

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
      default:
        return state;
    }
  });

export default reducer;
