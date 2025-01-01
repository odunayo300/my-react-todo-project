import React from "react";

export default class TodoItem extends React.Component{
    render(){
        const {tittle,deleteTodo,handleEdit} = this.props
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">

                <h6>{tittle}</h6>
                <div className="todo-icon">
                    <span onClick={handleEdit} className="mx-2 text-success">
                        <i className="fas fa-pen"></i>
                    </span>
                    <span onClick={deleteTodo} className="mx-2 text-danger">
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }
}