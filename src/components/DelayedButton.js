// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <button onClick={(event) => {setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)}}></button>
        )
    }
}