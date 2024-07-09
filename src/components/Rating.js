import React, { useReducer } from 'react';
import './Rating.css';

const initialState = { ratings: [false, false, false, false, false,false,false] };

function reducer(state, action) {
    switch (action.type) {
        case 'RATE':
            return { 
                ratings: state.ratings.map((rated, index) => index <= action.index ? true : false)
            };
        default:
            throw new Error();
    }
}

function Rating() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='item'>
            {state.ratings.map((rated, index) => (
                <div 
                    key={index} 
                    className='div' 
                    style={{ background: rated ? 'red' : 'grey' }}
                    onClick={() => dispatch({ type: 'RATE', index })}
                ></div>
                
                 
            ))}
        </div>
        
    );
}

export default Rating;

 