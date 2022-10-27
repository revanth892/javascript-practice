import React from 'react';

const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];


function App() {
  // const new-variabe =dataset name.map(); basic syntax
  // returns an array of values from the dataset
  //example
  const display_ages=people.map((item)=>{
    return(
      <><h3>{(item.age)}</h3></>
    );
  });
  //above can also be writtern
  const getages=(item)=>{
    return(
      <><h3>{(item.age*5)}</h3></>
    );
  }
  const display_ages1=people.map(getages);

  const getnames=(item)=>{
    return(<><h3>{item.name}</h3></>);
  }
  const display_names=people.map(getnames);

  //adding attributes
  const add_attributes=people.map((item)=>{
    return{
      lastname:"stark",
      age:(item.age)-2
    }
  });
  // const getfullnames=(item)=>{
  //   return(<><h3>{item.name+item.lastname}</h3></>);
  // }
  // const display_fullnames=people.map(getfullnames);
  return (
    <div>
      <h1>Map Method</h1>
      {display_ages}
      {display_ages1}
      {display_names}
      {/* {add_attributes()} */}
      {/* {display_fullnames} */}
    </div>
  );
}

export default App;
