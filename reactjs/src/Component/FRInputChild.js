import React from 'react'

//function FRInputChild() {
  //  return (
    //    <div>
      //      <input type ="text"/>
       // </div>
   // )
//}
const FRInput = React.forwardRef( (props, ref) =>{
    return (
           <div>
          <input type ="text" ref = {ref}/>
            </div>
        )
}) 

export default FRInputChild
