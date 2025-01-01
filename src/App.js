import React, { Component } from 'react'
import TodoInput from './components/Todoinput'
import TodoList from './components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  state = {
    item:"",
    items :[],
    id:0,
    editButton:false
  }

  // to handle change tthat collect the value of the input form
handleChange = e =>{
  this.setState({
    item: e.target.value
  })
}

// to add item to todo-list functionality
handleSubmit = (e)=>{
  e.preventDefault();

      // the new value thta would be added to the todo list
     const newItem = {
      item:this.state.item,
      id:this.state.id
    }
  
  // updated the todo list storing the old array into a new variable
   const updatedItems = this.state.items

    //pushing the new item into the array by using push array method.... after when the item (input form is empty)
   if (this.state.item !=="") {
    updatedItems.push(newItem)

   }
   
    this.setState({
      items:updatedItems,
      item:"",
      id:this.state.id +1,
      editButton:false
    })
}

// clear todo item functionality
clearList = () =>{
  this.setState({
    items:[],
  
  })
}

//delete items in the todo
deleteTodo = id =>{
 const removeTodo = this.state.items.filter(item=>((item.id) !== id))
  this.setState({
    items:removeTodo
  })
}

//edit todo functionality

handleEdit = id =>{
  const removeItem = this.state.items.filter(item=>((item.id) !== id))
  const editItem = this.state.items.find(item=>(item.id) == id )

  this.setState({
    items:removeItem,
    item:editItem.item,
    editButton:true
  })
}
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>
              todo input
            </h3>
            <TodoInput 
              item ={this.state.item} 
              handleChange ={this.handleChange}
              handleSubmit = {this.handleSubmit} 
              editButton = {this.state.editButton}
            />

            <TodoList 
              items = {this.state.items}
              clearList ={this.clearList}
              deleteTodo={this.deleteTodo}
              handleEdit = {this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}
