import  React from 'react'

 const Child = ({name , btn , fun}) => {

function perform(){
   fun(btn)
}

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={perform}>{btn}</button>
    </div>
  )
}

export default Child;