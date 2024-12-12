import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from "./components/Todoinput";
import TodoList from "./components/Todolist";


export default class App extends React.Component{

    state ={
        item:"",
        items:[],
        id:0,
        editItem:false
    }

    handleChange = e =>{
        this.setState({
            item:e.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();

       const newItem={
            item:this.state.item,
            id:this.state.id
        }
        
        if(this.state.item.trim() !== ""){
            const updatedItem = [...this.state.items,newItem]
        
            this.setState({
                items:updatedItem,
                item:"",
                editItem:false,
                id:this.state.id + 1
            })
        }
    }

   
clearList = ()=>{
    this.setState({
        items:[]
    })
}

handleDelete = id =>{

   const filteredItem =  this.state.items.filter(item => item.id !== id)

   this.setState({
    items:filteredItem
   })
}

handleEdit = id =>{
    
    const filteredItem =  this.state.items.filter(item => item.id !== id)
    
    const selectedItem = this.state.items.find(item => item.id  === id)
    console.log(selectedItem)

    this.setState({
     items:filteredItem,
     item:selectedItem.item,
     editItem :true
    })
 }


    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">
                            todo input
                        </h3>
                        <TodoInput 
                            item ={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem = {this.state.editItem}
                        />
                        <TodoList 
                          items ={this.state.items} 
                          clearList ={this.clearList}
                          handleDelete = {this.handleDelete}
                          handleEdit = {this.handleEdit}
                        /> 
                    </div>
                </div>
            </div>
        )
    }
}
