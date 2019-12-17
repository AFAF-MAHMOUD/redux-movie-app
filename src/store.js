import {createStore,combineReducers} from "redux";
import ListMoviesReducers  from './reducers/ListMoviesReducers';
import DisplayReducers  from './reducers/DisplayReducers';

import nameReducers  from './reducers/nameReducers';
import imgReducers  from './reducers/imgReducers';
import ratingReducers  from './reducers/ratingReducers';

import filterName from './reducers/filterName' ;
import filterStar from './reducers/filterStar' ;


const store=createStore(combineReducers({
ListMoviesReducers:ListMoviesReducers,
DisplayReducers:DisplayReducers,
nameReducers:nameReducers,
imgReducers:imgReducers,
ratingReducers:ratingReducers,
filterName:filterName,
filterStar:filterStar
})
)
export default store;