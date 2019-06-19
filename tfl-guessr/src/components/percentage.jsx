import React from 'react';

export default class percentageRight extends React.Component {
    constructor (props) {
        super (props)
    }




    render(){
        let {score} = this.props;
        return(
            <div>
            <p>{`You currently have ${score} correct!`}</p>
            </div>
        )
    }
  
}