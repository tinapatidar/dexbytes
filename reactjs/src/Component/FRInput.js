import React, { Component } from 'react'

 class FRInput extends Component {
     constructor(props) {
         super(props)
     
         this.InputRef=React.createRef()
     }
     clickHandler=  () =>{
         this.InputRef.current.focus()
     }
    render() {
        return (
            <div>
                <input type ="text" ref ={this.InputRef}/>
                <button onClick = {this.clickHandler}>Focus Input</button>
                
            </div>
        )
    }
}

export default FRInput
