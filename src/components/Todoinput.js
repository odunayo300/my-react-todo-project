import React from "react";

export default class TodoInput extends React.Component{
    render(){
        const{item,handleChange,handleSubmit,editButton} = this.props
        return(
            <div className="card card-body mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"/>
                            </div>
                            <input type="text" 
                                className="form-control text-capitalize"
                                placeholder="Enter todo Items " 
                               value={item}
                               onChange={handleChange} 
                            />
                    </div>
                    <div className="list-group">
                        <button type="submit" className={editButton?"btn btn-success mt-3" :"btn btn-primary mt-3"}> {editButton? "Edit Todo":"Add Items"} </button>
                    </div>
                </form>
            </div>
        )
    }
}