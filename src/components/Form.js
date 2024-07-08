import React, { useState } from 'react'

function Form(porps) {
    
    const [form, setForm] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
        age:"23"
      });
    
  return (
    <div>
        <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <label >Age:
        <input type='number' 
         value={form.age}
          onChange={event=>{
             setForm({
                ...form,
                age:event.target.value
             });
          }}
         />
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        {form.age} {' '}{' '}
        ({form.email})
        {porps.name}
      </p>
        
    </div>
  )
}

export default Form
