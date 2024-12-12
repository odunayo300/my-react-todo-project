import React from "react";

export default class TodoInput extends React.Component{
    render(){
        const{item,handleChange,handleSubmit,editItem} = this.props
        return(
            <div className="card card-body mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"/>
                            </div>
                            <input type="text"
                                className="form-control text-capitalize"
                                placeholder="Enter todo items"
                                value={item}
                                onChange={handleChange} 
                                editItem ={editItem}               
                             />
                    </div>
                    <div className="list-group">
                    <button type="submit" className={editItem?"btn btn-success mt-3":"btn btn-primary mt-3 "}>
                        {editItem?"Edit item":"Add item"}
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}