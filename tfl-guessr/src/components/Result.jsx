import React from 'react';
import './Result.css';

export default class Result extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {answered, resultText} = this.props;
        return (
            <div className={`resultItem ${answered ? 'resultItem-correct' : 'resultItem-wrong'}`}>
                {answered && resultText}
            </div>
        )
    }
    
}