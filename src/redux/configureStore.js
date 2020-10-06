import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "../redux/reducers/dishes";
import { Comments } from "../redux/reducers/commetns";
import { Promotions } from "../redux/reducers/promotions";
import { Leaders } from "../redux/reducers/leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";
import { composeWithDevTools } from 'redux-devtools-extension'; 



export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

  return store;
};
