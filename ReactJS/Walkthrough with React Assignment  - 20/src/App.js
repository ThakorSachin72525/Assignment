import './App.css';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';
import BR from './BR';

function App() {
  return (
    <div className="App">
      Q-1
      <Person name ="Sachin" age="23"/>

      Q-2
      <BR></BR>
      <Button text="Click Me" onClick={()=> window.alert("Button Clicked")}/>

      <BR></BR>
      Q-3
      <Header title="Hello World!"/>

      Q-4
      <List items={['apple', 'banana', 'orange']} />

    </div>
  );
}

export default App;
