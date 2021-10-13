import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount = () => {
        this.setState(prevState =>{
            return{count:prevState.count+1}
          })
    }
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <h1  onMouseOver={incrementCount}>Hovered {count} Time</h1>
            </div>
        )
    }
}

export default HoverCounterTwo
