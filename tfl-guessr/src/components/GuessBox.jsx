import React from 'react';
import './GuessBox.css';

export default class GuessBox extends React.Component{
    constructor(props){
        super(props)
        this.input = React.createRef();
    }

    handleChange(){
        const {onChange} = this.props;
        if (onChange(this.input.current.value)){
              this.input.current.value = '';
        }
    }

    render(){
        return(
            <input type="text" className="guessBox" onChange={() => this.handleChange()} ref={this.input}></input>
        )
    }
}