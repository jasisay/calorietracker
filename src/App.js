
import { useState } from "react";


export default function App(){
  
  const [Limit,setLimit] = useState(1000)
  const [name,setName] = useState("");
  const [calories,setCalories] = useState(0);
  const [workouts,setWorkouts] = useState([]);
  const [meals,setMeals] = useState([]);


  function handleLimit(limit){
    setLimit(limit);
    
  }

  function handleName(name){
    setName(name);
  }

  function handleMeal(meal){
    setMeals((meals)=>[...meals,meal]);
  }

  function handleCalories(calories){
    setCalories(calories);
  }

   function handleWorkout(workout){
    setWorkouts((workouts)=>[...workouts,workout]);
   }

  return (<div>
    <MainHeading limit={Limit}  onSetLimit={handleLimit} />
    <Heading  limit={Limit} onSetLimit={handleLimit}/>
    <Filters />
    <Add onWorkout={handleWorkout} onAddMeal={handleMeal} meals={meals}  name={name} calories={calories} workouts={workouts} onSetName={handleName} onSetCalories={handleCalories}/>
  </div>)
}

function MainHeading({onSetLimit,limit}){
  return (<div className="main">
    <div>🍽️ Tracalorie</div>
    <div >
      <div className="medium">
      <label >Set Daily Limit</label>
      <input type="text" value={limit} name="calory" placeholder="Set Daily Limit" onChange={(e)=>onSetLimit(e.target.value)} />
      </div>
      <button className="btn">Reset</button>
    </div>
  </div>);
}

function Heading({limit}){

  return (<div className="heading">
    <h2>Daily Limit {limit}</h2>
    <h2>Gain/Loss</h2>
    <h2>Calories Remaining</h2>
  </div>)
}

function Filters(){
  return <div className="filters">
           <div className="workout">
            <label  >Workout</label>
            <input type="text" name="workout" placeholder="Filter Workout" />
           </div>
           <div className="meal">
           <label  >Meal</label>
           <input type="text" name="meal" placeholder="Filter Meal" />

           </div>
          </div>
}

function Add({onWorkout,onAddMeal,meals,name,calories,onSetCalories,onSetName,workouts}){
  
function addWorkout(e){
  e.preventDefault();
  const newWorkout = {
    name,
    calories
  }

  onWorkout(newWorkout);
}

function addMeal(e){
  e.preventDefault();
  const newMeal = {
    name,
    calories
  }

  onAddMeal(newMeal);
}

  


  


 
  
   return (<div className="add" >
     <div className="workout" >
      <form onSubmit={(e)=>addWorkout(e)}> 
        <input type="text"   value={name} placeholder="Workout Name" onChange={(e)=>onSetName(e.target.value)} />
        <input type="text"  value={calories} placeholder="Calory Value" onChange={(e)=>onSetCalories(e.target.value)}/>
      </form>
      <button onClick={(e)=>addWorkout(e)}>Add Workout</button>
      <ul>
      {workouts.map((workout,i)=>(<li key={i}>{`${workout.name} ${workout.calories}`} {<button onClick={(e)=>e.target.parentElement.remove()}>❌</button>}</li>))}</ul>

    </div> 

    <div className="meal" id="meal">
    <form onSubmit={(e)=>addMeal(e)}>
        <input type="text" value={name}  placeholder="Meal Name" onChange={(e)=>onSetName(e.target.value)}/>
        <input type="text" value={calories} placeholder="Calory Value" onChange={(e)=>onSetCalories(e.target.value)} />
      </form>
     
      <button onClick={(e)=>addMeal(e)}>Add Meal</button>
      <ul>
      {meals.map((meal,i)=>(<li key={i}>{`${meal.name} ${meal.calories}`} {<button onClick={(e)=>e.target.parentElement.remove()}>❌</button>}</li>))}</ul>
      

    </div>
  </div>)
}

