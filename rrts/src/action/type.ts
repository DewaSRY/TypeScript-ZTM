import { FetchTodosAction,DeleteTodoAction } from "./Todo";


export enum ActionTypes{
    fetchTodos="fetchTodos",
    deleteTod="deleteTod",
}
export type Action=
    FetchTodosAction | 
    DeleteTodoAction;