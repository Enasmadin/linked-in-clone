
import rootReducer from '../Reducer/index';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
 const store = createStore(rootReducer,applyMiddleware(reduxThunk));
 export default store ;
