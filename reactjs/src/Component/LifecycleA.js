import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
 class LifecycleA extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name :'Tina'
        }
       
        console.log('LifecycleA constructor')
      }
      static getDerivedStateFromProps(props,state){
        console.log(' LifecycleA getDerivedStateFromProps')
        return null
      }
      componentDidMount(){
          console.log('LifecycleA ComponentDidMount')
      }
      shouldComponentUpdate(nextProps){
          console.log('LifecycleA shouldComponentUpdate')
          return true
      }
      getSnapshotBeforeUpdate(preProps, preState){
          console.log('LifecycleA getSnapshotBeforeUpdate')
          return null
      }
      componentDidUpdate(preProps,preState,snapShot)
      {
          console.log('LifecycleA componentDidUpdate')
      }
      changeState= () =>{
        this.setState ( {
            name : 'patidar'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (<div>  

            <div>LifecycleA </div>
            <button onClick = {this.changeState}>Change State</button>
            <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
