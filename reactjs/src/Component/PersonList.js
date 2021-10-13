import React from 'react'
import Person from './Person'
function PersonList() {
    const persons =[
        {
            id:1,
            name:'Tina',
            age: 20,
            skill :'React'

        },
        {
            id:2,
            name:'Kinuu',
            age: 22,
            skill :'C++'

        },
        {
            id:3,
            name:'Jinu',
            age: 25,
            skill :'Java'

        }


    ]
    const personList = persons.map(person=>  <Person key ={person.id} person  ={person} />)
    return (
    <div>  {personList}</div>
    )
    
}

export default PersonList
