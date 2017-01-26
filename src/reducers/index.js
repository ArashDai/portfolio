import { combineReducers, createStore } from 'redux';
import {reducer as formReducer} from 'redux-form';
import {SUBMIT_FORM} from '../actions/index';


const rootReducer = combineReducers({
  form:formReducer.plugin({
        ContactForm: (state, action) => {
          switch(action.type) {
            case SUBMIT_FORM:
              return undefined;
            default:
              return state;
          }
        }
      })
});


const store = createStore(rootReducer);
export default rootReducer;
