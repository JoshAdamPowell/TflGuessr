import React from 'react';
import Result from './Result';
import GuessBox from './GuessBox';
import answers from '../resources/answers.json'
import './Game.css';

export default class Game extends React.Component{
    constructor(props){
        super(props)
         const results = answers.map(answer => {
            return {
            value: answer,
            correct: false,
            };
        })
        console.log(answers);
        this.state = {
            results: results
        };
    }

    handleGuess(guess){
        console.log(guess);
        let changed = false;
        const {results} = this.state;
        for(let result of results){
            if (result.value.toLowerCase() === guess.toLowerCase()){
                console.log('CORRECT!');
                result.correct = true;
                changed = true;
                break;
            }
        }
        if (changed){
            this.setState({results});
            return true;
        }
    }

    generateResults(){
        return this.state.results.map(result => <Result resultText={result.value} answered={result.correct}></Result>)
    }


    render(){
        return(
            <>
            <GuessBox onChange={(guess) => this.handleGuess(guess)}></GuessBox>
            <div className="gameWindow">
                {this.generateResults()}
                </div>
                
            </>
        )
    }
}