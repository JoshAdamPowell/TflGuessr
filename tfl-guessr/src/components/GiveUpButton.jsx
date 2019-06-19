import React from 'react';

export default class GiveUpButton extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const {onClick} = this.props;
        return(
            <button onClick={() => onClick()} > I give up! </button>
        )
    }
}