import React, { Component } from 'react'
 class LifecycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name :'Tina'
        }
        console.log('LifecycleB constructor')
      }
      static getDerivedStateFromProps(props,state){
        console.log(' LifecycleB getDerivedStateFromProps')
        return null
      }
      componentDidMount(){
          console.log('LifecycleB ComponentDidMount')
      }
      shouldComponentUpdate(nextProps){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(preProps, preState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(preProps,preState,snapShot)
    {
        console.log('LifecycleB componentDidUpdate')
    }
    render() {
        console.log('LifecycleB render')
        return <div>  Lifecycle </div>
        
    }
}

export default LifecycleB
