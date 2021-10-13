import React, { Component } from 'react'

 class UserGreetings extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             isLoggedIn: true
              
         }
     }
     
    render() {
        if(this.state.isLoggedIn){
            return<div>
                Hello Tina
            </div>
        }

        else{
            return<div>Hello Guest</div>
        }
        
    }
}

export default UserGreetings
