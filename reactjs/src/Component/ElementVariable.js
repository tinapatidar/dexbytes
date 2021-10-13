import React, { Component } from 'react'

export class ElementVariable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
       let message
           if(this.state.isLoggedIn){
           message =<div>hello Tina</div>
       }
       else{
           message=<div>hello Guest</div>
       }
        return<div>{message}</div>
    }
}

export default ElementVariable
