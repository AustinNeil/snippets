# React Components

## Functional Components
Functional Components should be used when state is not managed and are used primarily to display or return information
```javascript
import React from 'react';
const component = () => {
    return(
        <div>content</div>
    )
}
export default component;
```
Accepting props
```javascript
const component = props => {
    return(
        <div>props.message</div>
    )
}
```

## Class Components
Class Components should be used when state is required and typically contain functional components
```javascript
export default class TodoContainer extends Component {
    render(){
        return(
            <div>
                <OtherComponent/>
            </div>
        )
    }
}
```
### Adding State
```javascript
constructor(props){
    super(props);
    this.state = {
        data: [{text: "", id: 3}, {text: "", id: 5},{text: "", id: 8}, {text: "", id: 10}],
        showError: false,
        errorMessage: 'Error!'
    }
}
```
### Class Functions
```javascript
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
```