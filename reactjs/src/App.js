import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';
import Hello from './Component/Hello'
import Greet from './Component/Greet'
import Greet2 from './Component/Greet2'
import Message from './Component/Message'
import Counter from './Component/Counter'
import FunctionalClick from './Component/FunctionalClick'
import ClassClick from './Component/ClassClick'
import EventBind from './Component/EventBind'
import ParentComponent from './Component/ParentComponent'
import ChildComponent  from './Component/ChildComponent'
import UserGreetings from './Component/UserGreetings'
import ElementVariable from './Component/ElementVariable'
import TernaryConditionalOperator from './Component/TernaryConditionalOperator'
import NameList from './Component/NameList'
import PersonList from './Component/PersonList'
import Person from './Component/Person'
import Stylesheet from './Component/Stylesheet'
import Inline from './Component/Inline'
import './appStyles.css'
import  styles from './appStyles.modules.css'


import Form from './Component/Form'
import LifecycleA from './Component/LifecycleA';
import FragmentDemo from './Component/FragmentDemo';
import Table from './Component/Table';
import PureComp from './Component/PureComp'
import ParentComp from './ParentComp';
import RefsDemo from './Component/RefsDemo';
import FocusInput from './Component/FocusInput';
import FRInput from './Component/FRInput';
import PortalDemo from './Component/PortalDemo';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';
import ClickCounterTwo from './Component/ClickCounterTwo';
import HoverCounterTwo from './Component/HoverCounterTwo';
import User from './Component/User';
import CounterTwo from './Component/CounterTwo';
import ComponentF from './Component/ComponentF';
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/userContext';

class App extends Component{

 

render() {
  return (
    <div className="App">
      <UserProvider value = 'Tina'>
    <ComponentC/>
    </UserProvider>

      
           
            {/*<User render ={ (isLoggedIn) =>isLoggedIn ? 'Tina' : 'Guest'}/>
      <CounterTwo
      render={ (count,incrementCount) =>(
      <ClickCounterTwo count ={count} incrementCount ={incrementCount}></ClickCounterTwo>
      
      )}
    />
    <CounterTwo
      render={ (count,incrementCount) =>(
      <HoverCounterTwo count ={count} incrementCount ={incrementCount}></HoverCounterTwo>
      
      )}
    />

      */
/*
      <ClickCounterTwo/>
      <HoverCounterTwo/>
      <ClickCounter/>
      <HoverCounter/>
       <PortalDemo/>
       <FRInput/>
      <FocusInput/>

       <RefsDemo/>
           <PureComp/>
<ParentComp/>
      <Table/>
      <FragmentDemo/>
       <LifecycleA/>
      <Form/>
       <h1 className ='error'>Error</h1>
      <h1 className = {styles.success}>Success</h1>
      <Inline/>
      <Stylesheet primary ={false}/>
     <ElementVariable/>
      <TernaryConditionalOperator/>
      <NameList/>
      <PersonList/>
      <UserGreetings/>
      < Counter />*/}
     {/* < EventBind />
      <ParentComponent/> */}
     {/* <Message /> */}
      {/*
      <Greet name = "Mahi" />
      <Greet  name = "kinu"/>
      <Greet name = "Jinu" />
      */}
      {/*<Greet name ="Tina" heroName="Kinu"/>*/}
      {/*<Greet2 name = "Jinu" heroName = "Motuu"/>*/}
      {/*<FunctionalClick/>*/}
      {/*<ClassClick/>*/}
     
    </div>
  );
  }
   }
export default App;
