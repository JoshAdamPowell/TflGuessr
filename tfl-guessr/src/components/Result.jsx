import React from 'react';
import './Result.css';

export default class Result extends React.Component{
    constructor(props){
        super(props)
    }

    getStyle(){
        const {showAnswer, correct} = this.props;
        if (!showAnswer){
            return 'resultItem-unanswered'
        }
        if (correct){
            return 'resultItem-correct'
        }
        return 'resultItem-incorrect'
    }

    render(){
        const {showAnswer, resultText} = this.props;
        return (
            <div className={`resultItem ${this.getStyle()}`}>
                {showAnswer && resultText}
            </div>
        )
    }
    
}