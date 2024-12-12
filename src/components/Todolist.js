import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component{
    render(){
        const {items,clearList,handleDelete,handleEdit} = this.props
        return(
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    todo list
                </h3>
              {items.map(item=>{

                 return(
                     < TodoItem
                      key ={item.id}
                      title={item.item}
                      id ={item.id}
                      handleDelete = {handleDelete}
                      handleEdit = {handleEdit}
                     />
                )
                
              })}

                <button onClick={clearList} type="button" className="btn btn-danger btn-block mt-5">
                    clear list
                </button>
            </ul>
        )
    }
}