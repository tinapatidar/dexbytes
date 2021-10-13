import React from 'react'

function NameList() {
    const names = ['Tina','Kinu','Jinu']
    return (
        <div>
 {names.map((name , index)=><h2 key ={name}>{index}{name}</h2>)}
           
          { 
          /* <h2>{name[0]}</h2>
            <h2>{name[1]}</h2>
            <h2>{name[2]}</h2>
            
    */ }
        </div>
    )
}

export default NameList
