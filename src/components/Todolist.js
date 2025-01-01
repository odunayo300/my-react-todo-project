import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component{

    render(){
        const {items,clearList,deleteTodo,handleEdit} = this.props
        return(
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    todo list
                </h3>
                     {items.map(item=>(
                        <TodoItem 
                            tittle ={item.item}
                            key ={item.id}
                            deleteTodo ={()=>{deleteTodo(item.id)}}
                            handleEdit = {()=>{handleEdit(item.id)}}
                        />
                     ))}

                <button onClick={()=>{clearList()}} type="button" className="btn btn-danger btn-block mt-5">
                    clear list
                </button>
            </ul>
        )
    }
}