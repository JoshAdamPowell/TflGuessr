import React from 'react';
import Result from './Result';
import GuessBox from './GuessBox';
import GiveUpButton from './GiveUpButton';
import answers from '../resources/answers.json';
import Percentage from './percentage';
import './Game.css';

export default class Game extends React.Component{
    constructor(props){
        super(props)
         const results = answers.map(answer => {
            return {
            value: answer,
            correct: false,
            showAnswer: false,
            };
        })
        this.state = {
            results: results,
            score: 0,
        };
    }



    giveUp(){
        const {results} = this.state;
        for(let result of results){
            if (!result.correct){
                result.showAnswer = true;
            }
        }
        this.setState({results});
    }

    handleGuess(guess){
        let changed = false;
        let {results, score} = this.state;
        for(let result of results){
            if (result.value.toLowerCase() === guess.toLowerCase()){
                result.correct = true;
                result.showAnswer = true;
                changed = true;
                break;
            }
        }
        if (changed){
            score = score+1;
            this.setState({results, score});
            return true;
        }
    }

    generateResults(){
        return this.state.results.map(result => <Result 
            resultText={result.value} 
            correct={result.correct} 
            showAnswer={result.showAnswer}
            key={result.value}></Result>)
    }

    render(){

        return(
            <>
            <GuessBox onChange={(guess) => this.handleGuess(guess)}></GuessBox>
            <GiveUpButton onClick={() => this.giveUp()}></GiveUpButton>
            <Percentage score={this.state.score}></Percentage>
            <div className="gameWindow" id='gameWindow'>
                {this.generateResults()}
            </div>
            </>
            
        )
    }
}