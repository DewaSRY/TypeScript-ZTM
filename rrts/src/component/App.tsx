import { Component } from "react"
import {  connect } from "react-redux"
import { Todo,fetchTodos,deleteTodo } from "../action"
import { StoreState } from "../reducer"
interface AppProps{
    todos:Todo[];
    fetchTodos:Function;
    deleteTodo:typeof deleteTodo;
}
interface AppState{
    fetching:boolean,
    counter:number
}
class _App extends Component<AppProps,AppState>{
    constructor(props:AppProps){
        super(props)
        this.state={
            fetching:false,
            counter:0
        }
    }
    onIncerment=():void=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    componentDidUpdate(prevProps:AppProps): void {
        if(!prevProps.todos.length && this.props.todos.length){
            this.setState({
                fetching:false
            })
        }
    }
    onDecerment=():void=>{
        this.setState({
            counter:this.state.counter-1
        })
    }
    onFetchTodos=():void=>{
        this.props.fetchTodos()
        this.setState({
            fetching:true
        })
    }
    onDeleteTodo=(id:number):void=>{
        this.props.deleteTodo(id)
    }
    Displaylist():JSX.Element[]{
        return this.props.todos.map((todo:Todo)=>{
            return<div key={todo.id} >
                <h1 onClick={()=>this.onDeleteTodo(todo.id)}>{todo.title}</h1> 
            </div>
        }).filter((todo,num)=>num<10)
    }
    render() {
        console.log(this.props.todos)
        return <div>
            <h1>hallo</h1>
            <h1>we counter {this.state.counter}</h1>
            <button onClick={this.onIncerment}>Incerment</button>
            <button onClick={this.onDecerment}>  Decerment</button>
            <div>
                <button onClick={this.onFetchTodos}>FetchTodos</button>
                    <div>
                        {this.state.fetching?"Loading":null}
                        {this.Displaylist()}
                    </div>
                </div>
        </div>
    }
}
const maapStateToProps=(state:StoreState):{todos:Todo[]}=>{
    return {
        todos:state.todos
    }
}
export const App=connect(
    maapStateToProps,
    {fetchTodos,deleteTodo}
)(_App);