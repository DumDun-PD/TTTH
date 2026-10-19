// import { useState } from 'react';
import React from "react";

function GoalForm(props) {
  const [formData, setFormData] = React.useState({ goal: "", by: "" })

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  };

  return (
    <>
      <h1>My little Lemom Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
        <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoal(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by} </span>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  // 1
  // const [restaurantName, setRestaurantName] = useState("Lemon");
  // console.log(restaurantName);
  // function updateRestaurantName() {
  //   setRestaurantName("little Lemon")
  // }
  // 1

  const [allGoals, updateAllGoals] = React.useState([]);

  function addGoal(goal) { updateAllGoals([...allGoals, goal]); }



  return (

    //1\
    // <div>
    //   <h1>{restaurantName}</h1>
    //   <button onClick={updateRestaurantName}>
    //     Update restaurant name
    //   </button>
    // </div>
    // 1

    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoal allGoals={allGoals} />
    </div>


  );
};


