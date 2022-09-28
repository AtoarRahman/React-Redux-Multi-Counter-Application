/* eslint-disable eqeqeq */
import { useReducer } from "react";
import AddCounter from "./components/AddCounter";
import Counter from "./components/Counter";

// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const ADDCOUNTER = 'addCounter';
const RESETCOUNTER = 'resetCounter';

// initial state
const initialState = [
    {
        id: Math.random(),
        value: 0,
    }
];

// create reducer function
function reducer(state = initialState, action) {

    if (action.type === INCREMENT) {
        return state.map((c)=>{
            if(c.id == action.id){
                return {
                    ...c,
                    value: c.value + action.payload
                }
            }
            return {...c}
        })
    } else if (action.type === DECREMENT) {
        return state.map((c)=>{
            if(c.id == action.id){
                return {
                    ...c,
                    value: c.value - action.payload
                }
            }
            return {...c}
        })
    } else if (action.type === ADDCOUNTER) {
        return[ 
            ...state,
            {
                id: Math.random(),
                value: 0,
            }
        ]
    } else if (action.type === RESETCOUNTER) {
        return state.map((c)=>{
            return {
                ...c,
                value: 0
            }
        })
    } else {
        return state;
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log({state});

    const addcounter = () => {
        dispatch({
            type: ADDCOUNTER,
        });
    };
    const resetcountrt = () => {
        dispatch({
            type: RESETCOUNTER,
        });
    };

    const increment = (id) => {
        dispatch({
            type: INCREMENT,
            payload: 1,
            id: id,
        });
    };

    const decrement = (id) => {
        dispatch({
            type: DECREMENT,
            payload: 1,
            id: id,
        });
    };

    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Multi Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {state?.map((c) => (
                    <Counter
                        key={Math.random()}
                        id={c.id}
                        count={c.value}
                        increment={increment}
                        decrement={decrement}
                    />
                ))}
                <AddCounter
                    addcounter={addcounter}
                    resetcountrt={resetcountrt}
                />
            </div>
        </div>
    );
}
