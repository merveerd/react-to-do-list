import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {

        e.preventDefault();
    
          this.props.addTodo(this.state.title);
          this.setState({title: ''});
     
    }
    
    onChange = (e) => this.setState({[e.target.name]: e.target.value})  //title yerine [e.target.name] yazmamiz da ayni sey. Yeni syntax. Boylece name e gore degisiklikleri butun itemlarda yapar yani name: surname gibi bir input alani olsa da onu da kapsayacakti.
    render(){
        return(
            <form onSubmit ={this.onSubmit} style = {{display: 'flex'}}>
           
            <input 
            type='text' 
            name='title' 
            style={{flex: '10', padding: '5px'}} 
            placeholder = 'Add Your New To-do here'
            value = {this.state.title}
            onChange = {this.onChange}
            ></input>
            <input type = 'submit' value ='Submit' className='btn' style ={{flex: 1}}></input>
        </form>
        )
       
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
  
  };
export default AddTodo