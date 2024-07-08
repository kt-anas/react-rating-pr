import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);


export default function Usecon() {
  const [name, setName] = useState('Anas');
  return (
    <ThemeContext.Provider value={name}>
      <Form />  
      <Button/>
      <Panel/>
      <Button/>
    </ThemeContext.Provider>
  )
}
function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}
function Panel() {
  const name = useContext(ThemeContext);
   return (
     
      <h1>{name}</h1>
          
    
  )
}
function Button() {
  const name = useContext(ThemeContext);
  return (
    <div>{name}</div>
  );
}
