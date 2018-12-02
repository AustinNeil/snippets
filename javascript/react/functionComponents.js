import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const TodoAdd = props => {
    let input;
    return(
        <div>
            <form>
            <Input placeholder={"Add a new item"}
            ref={node => {
                input = node;
            }}/>
            <Button onClick={(event) => {
                if(input.value === ''){
                    event.preventDefault();
                    props.handleError("Cannot add empty Todo Item");
                } else {
                    event.preventDefault();
                    props.addTodo(input.value);
                    input.value = '';
                }
            }}> Add </Button>
            </form>
        </div>
    );
};

TodoAdd.propTypes = {
    handleError: PropTypes.func,
    addTodo: PropTypes.func
};

export default TodoAdd;

const Input = styled.input`
    display: inline-block;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    width: 9em;
    height: 1em;
    margin: 10px 7px 5px 0;
    padding: 10px 20px;
    border: 1px solid #727072;
    -webkit-border-radius: 10px;
    border-radius: 23px;
    font-size: 1.2em;
    font-family: "Lato";
    color: rgba(255,255,255,1);
    -o-text-overflow: clip;
    text-overflow: clip;
    word-spacing: 6px;
    background: #727072;
    &::-webkit-input-placeholder {
        color: white;
      }
`;

const Button = styled.button`
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    border: 1px solid #018dc4;
    -webkit-border-radius: 23px;
    border-radius: 10px;
    font-size: 1.15em;
    font-family: "Lato";
    color: rgba(0,0,0,0.9);
    -o-text-overflow: clip;
    text-overflow: clip;
    background: #06AED5;
    -webkit-box-shadow: -2px 2px 6px 2px rgba(0,0,0,0.2) ;
    box-shadow: class="support css-value">-2px 2px 6px 2px rgba(0,0,0,0.2) ;
    -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
    -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
    -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
    transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
`;