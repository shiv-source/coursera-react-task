import { createStore, combineReducers , applyMiddleware } from "redux";
import { Dishes } from "../redux/reducers/dishes";
import { Comments } from "../redux/reducers/commetns";
import { Promotions } from "../redux/reducers/promotions";
import { Leaders } from "../redux/reducers/leaders";
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
