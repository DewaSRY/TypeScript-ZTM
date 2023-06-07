import {combineReducers} from "redux"
import { todoReducer } from "./Todo"
import { Todo } from "../action"
export interface StoreState{
    todos:Todo[]


}
export const reducers=combineReducers<StoreState>({
    todos:todoReducer
})