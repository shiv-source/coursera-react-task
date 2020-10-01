import { createStore, combineReducers } from "redux";
import { Dishes } from "../redux/reducers/dishes";
import { Comments } from "../redux/reducers/commetns";
import { Promotions } from "../redux/reducers/promotions";
import { Leaders } from "../redux/reducers/leaders";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    })
  );

  return store;
};
