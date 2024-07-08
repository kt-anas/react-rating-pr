import React, { useReducer } from 'react'

const initialState = 0;
const reducer = ( state,action)=>{
    switch(action){
        case "increment":
            return state + 1
            case "decrement":
                return state -1
                case "reset":
                    return initialState
                    default:
                        return state
    
    }
}
function Counder() {
   const [count,dipatch] =useReducer(reducer,initialState)
  
  return (
    
        <div>
    <div>Count - {count}</div>
      <button onClick={()=>dipatch("increment")}>Increment</button>
      <button onClick={()=>dipatch("decrement")}>Decrement</button>
      <button onClick={()=>dipatch("reset")}>Reset</button>
    </div>
  )
}

export default Counder
