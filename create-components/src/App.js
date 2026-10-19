import React, { useState } from 'react';

import { useReducer } from 'react';
const reducer = (state, action) => {
  if (action.type === 'ride') return { money: state.money + 10 };
  if (action.type === 'fuel') return { money: state.money - 10 };
  return new Error();
}

// import MealsProvider from '../src/providers/MealsProvider';
// import MealsList from '../src/components/MealsList';
// import Counter from '../src/components/Counter';


// import Heading from './Heading';
// import Btn from './Btn';
// import avatar from './avatar.png';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Main from './Main';
// import './App.css';
// import ModeToggler from './ModeToggler';
// import Child from './Child';

// function Logo(props) {
//   const userPic = <img src={avatar} alt="avatar" />
//   return userPic;
// }

function App() {
  // const date = new Date();
  // const [word, setWord] = React.useState('Eat');

  // function handleClick() {
  //   setWord('Drink')
  // }


  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // <>
    //   {/* <Header name="anna" color="blue" />
    // <Sidebar greet="Tuyet" />
    // <Main greet="Hi" /> */}
    //   {/* <h1> Hello world</h1> */}
    //   {/* <Logo /> */}

    //   {/* <Btn /> */}
    //   {/* <ModeToggler /> */}
    //   {/* <Child message={date.toLocaleTimeString()} /> */}
    // </>
    // <div className="App">
    //   <Heading message={word + " at Little Lemon"} />
    //   <button onClick={handleClick}>Click here</button>
    // </div>

    // <div>
    //   <MealsProvider>
    //     <MealsList />
    //     <Counter />
    //   </MealsProvider>
    // </div>

    <div className='App'>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'ride' })}>
          A new customer!
        </button>
        <button onClick={() => dispatch({ type: 'fuel' })}>
          Refill the tank!
        </button>
      </div>
    </div>

  );
}

export default App;
