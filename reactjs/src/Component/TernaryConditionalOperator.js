import React, { Component } from 'react'
 class TernaryConditionalOperator extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn : true
         }
     }
     
    render() {
        return this.state.isLoggedIn &&<div>Hello Tina</div>
    }
    
    /*
       return this.state.isLoggedIn ?
        (
            <div>welcome Tina</div>

        ):(
            <div>welcome Guest</div>
        )
        */ 
    
}

export default TernaryConditionalOperator
