import React from 'react';

const person={
  name: 'john',
};

const fn="firstname";
const char={
  [fn]:'Tony'
}
function App() {
  console.log(person.name);//john 
  person.age=54;
  console.log(person);//{name:'john', age: 255}
  console.log(char);
  function set_data_char(key,value){
    char[key]=value;
  }
  const value="stark"
  set_data_char("last-name",value);
  return (
    <div>
      <h2>Dynamic object keys</h2>
    </div>
  );
}

export default App;
