// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    constructor(props){
        super(props)
    }



    render() {
        return(
            <button onClick={ (event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}}></button>
        )
    }
}