import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username : ' ',
              address : ' ',
              topic : 'react'
         }
     }
     handleUsernameChange =event =>
     { this.setState({
         username: event.target.value
        
     }
     )
     }

     handleAddressChange =event=>
     {this.setState({
        address : event.target.value
     })}
     handleTopicChange = event =>
     {
         this.setState({
             topic:event.target.value
         })
     }
     handleSubmit = event =>{
         alert (`${this.state.username} ${this.state.address} ${this.state.topic}`)
         event.prevent.default()
     }
    render() {
        return (
           <form onSubmit ={this.handleSubmit}>
               <div>
                   <label>Username</label>
                   <input type ="text" value ={this.state.username} onChange={this.handleUsernameChange}/>
                   </div>
                   <div>
                   <label>Address</label>
                   <textarea value ={this.state.address} onChange ={this.handleAddressChange} ></textarea>
               </div>
               <div>
                   <label>Topic</label>
                   <select value = {this.state.topic} onChange={this.handleTopicChange}>
                       <option value ="react">React</option>
                       <option value ="angular">Angular</option>
                       <option value ="java">Java</option>
                       </select>
               </div>
               <button type ="submit">Submit</button>
           </form>
        )
    }
}

export default Form
