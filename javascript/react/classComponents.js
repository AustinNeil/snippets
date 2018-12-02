import React, {Component} from 'react';
import TodoAdd from './TodoAdd';
import TodoTitle from './TodoTitle';
import TodoList from './TodoList';
import ErrorModal from './ErrorModal';
import styled from 'styled-components';
// Container, Should store the State
export default class TodoContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{text: "", id: 3}, {text: "", id: 5},{text: "", id: 8}, {text: "", id: 10}],
            showError: false,
            errorMessage: 'Error!'
        }
    }
    // add handler
    addTodo(val){
        const todo = {text: val, id: window.id++}
        this.setState(state =>{
            const data = [...state.data, todo];
            return{data}
        })
    };
    // remove handler
    handleRemove(id){
        const remainder = this.state.data.filter((todo) => {
            if(todo.id !== id){
                return todo;
            }
        });
        this.setState({data: remainder});
    };
    // handle errors
    handleError(e){
        this.setState((prevState) => {
            return {
                showError: !prevState.showError,
                errorMessage: e
            }
        })
        setTimeout(function(){
            this.setState(() => {
                return {
                    showError: false,
                    errorMessage: ''
                }
            })
        }.bind(this),3500);
    };
    render(){
        return(
            <div>
                <ErrorModal showError={this.state.showError} errorMessage={this.state.errorMessage} handleError={this.handleError.bind(this)}/>
                <Container>
                    <TodoTitle title='To-do List'/>
                    <TodoAdd addTodo={this.addTodo.bind(this)} handleError={this.handleError.bind(this)}/>
                    <TodoList 
                        todos={this.state.data}
                        remove={this.handleRemove.bind(this)}
                    />
                </Container>
            </div>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    align-items: center;
    justify-content: center;
`;