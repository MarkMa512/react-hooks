// https://www.youtube.com/watch?v=O6P86uwfdR0&t=120s
import { useState } from 'react';
import './App.css';

/**
 * JS Hooks: 
 * 1. You cna only use a hook inside the function component, cannot use in a class component
 * 2. Every time when the component runs, the hooks must be executed in the excat same order. 
 *    a. if statement: the 1st hook may or may not run => cannot put hook into a if statement 
 * 3. Nothing arounds the hook, at the top level of the function 
 * 4. React Hooks must be called in the exact same order in every component render. No loop, etc 

 */

function countStateInitial() {
    console.log('run every time it renders');
    return 4
}

function useStateHook() {
    // const [counterState, setCounterState] = useState(4);
    /*set the counter default to be 4, use state always return an array with 2 values
    * 1st value is the state: current state of every iteration of the render function 
    * 2nd value is a function: allowing us to update our state 
    * the initial value of 4 get to called every time we  run our function, and this may slow down our application
    * Besides taking the initial state directly, we can also pass in as a function that run ony once 
    */

    // const [counterState, setCounterState] = useState(() => {
    //   console.log("run once only!  ") // best for slow computation
    //   return 4;
    // });

    // const [counterState, setCounterState] = useState(countStateInitial()); // this runs every time when the components renders 

    // take note of how useState handles object 

    // const [state, setState] = useState({ count: 4, theme: 'Blue' });
    // const counterState = state.count;
    // const themeState = state.theme;

    const [counterState, setCounterState] = useState(
        () => {
            return 4;
        }
    );

    const [themeState, setThemeState] = useState(
        () => {
            return 'blue';
        }
    )
    /**
     * The biggest benefits of useState: multiple different state and break them down
     * easier to change and manage!  
     */


    // function decrementCountIncorrect() {
    //   setCounterState(counterState - 1);
    //   setCounterState(counterState - 1);
    //   // overrides each other, so only -1; not an ideal way
    // }

    function decrementCount() {
        // setState(previousCounterState => previousCounterState - 1);
        // setCounterState(previousCounterState => previousCounterState - 1);     // now it -2 per click 
        /**
         * Any time, when you are modifying the state, you must use the function version of setting your state
         */
        // setState(previousState => {
        //   return {
        //     // ...previousState, count: previousState.count - 1 // interesting, this  does not work 
        //   }
        // });
        setCounterState(previousCounterState => {
            return previousCounterState - 1;
        });

    }

    function incrementCount() {
        // setCounterState(counterState + 1);
        // setState(previousCounterState => previousCounterState + 1);
        // setState(previousState => {
        //   return {
        //     counterState: previousState.count - 1
        //   }
        // });
        // note that the theme is gone; with useState hook, it is not merging an object, it is overriding all the states 
        // ideally, we should have multiple hooks for different states 

        // setState(previousState => {
        //   return {
        //     ...previousState, count: previousState.count + 1
        //     // ...previousState, counterState: previousState.count + 1 this does not work 
        //   }
        // });

        setCounterState(previousCounterState => {
            return previousCounterState + 1;
        });
        setThemeState('red');
    }

    return (
        <div className="App">
            <button onClick={decrementCount}>-</button>
            <span>{counterState}</span>
            <span>{themeState}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    );
}

export default useStateHook;
