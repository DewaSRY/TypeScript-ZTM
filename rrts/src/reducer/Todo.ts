import { Todo,Action,ActionTypes } from "../action"
export const todoReducer=(
    state:Todo[]=[],
    action:Action
    )=>{
    switch(action.type){
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTod:
            return state.filter((todo:Todo)=>todo.id!==action.payload)
        default:
            return state
    }
}