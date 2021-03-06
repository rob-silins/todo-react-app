import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/Layout/AddTodo';
import About from './Components/Pages/About';
import axios from 'axios';

class App extends Component 
{
    state = {
    todos: []
  }

  componentDidMount (){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  });
  }

  delTodo = (id) => {
    axios.delete(`
    https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>this.setState({todos:
      [...this.state.todos.filter
      (todo => todo.id !== id )]}));
  }

  AddTodo = (title) => {
    if(title !=="")
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {title,
    completed: false
  })
  .then(res => this.setState({ 
    todos: [res.data, ...this.state.todos]}) );
  
  }

  render()
  {
    return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={()=>(
            <React.Fragment>
            <AddTodo AddTodo = {this.AddTodo}/>
            <Todos todos={this.state.todos} 
            markComplete={this.markComplete}
            delTodo={this.delTodo}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
