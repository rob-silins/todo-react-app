import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
state = {
    title: ''
}

onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: ''});
}

onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style = {{display: 'flex'}}>
                <input 
                type="text" 
                name="title" 
                style = {{fontSize:'20px', flex: '10', padding: '10px'}}
                placeholder="Type in a new task"
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="Add task"
                className="btn"
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    AddTodo: PropTypes.func.isRequired
}

export default AddTodo
