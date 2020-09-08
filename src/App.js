import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./components/layout/pages/About";
import axios from 'axios';
class App extends Component {
  state = {
    todos: [
     
    ]
  };
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(res => this.setState({todos: res.data }))
}

  markComplete = id => {
    // returnde () olarak cagirsaydik(sadece random console bastirip ve bind i kaldirsaydik) fonksiyon hemen cagriliyo onChange eventini beklemeden.
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed; //nasil bir syntax tir bu toggle luyormus?
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>this.setState({
      todos: [...this.state.todos, res.data]
    }))
    
 /*   this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }); */
  };

  addTodo = title => {
    console.log(title);
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })

    .then(res =>  this.setState({
      todos: [...this.state.todos, res.data]
    }));

 /*   let newTodo = {
      id: this.state.todos[this.state.todos.length - 1].id + 1,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    }); */
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path ="/about" component = {About}/>
        </div>
      </Router>
    );
  }
}

export default App;
