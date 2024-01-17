import './App.css';
import {Greet} from './Components/Greet';
import {Heading} from './Components/Heading';
import { Message } from './Components/Message';
import { Oscar } from './Components/Oscar';
import {Person} from './Components/Person';
import {PersonsList} from './Components/PersonsList';
import {Status} from './Components/Status';

function App() {
  let personData = {
    first: 'Sufiyan',
    last: 'Akkode'
  };

  let PersonsListData = [
    {id: 1, name: 'Shana', place: 'Ramanatukara'},
    {id: 2, name: 'Najwa', place: 'Palakkad'},
    {id: 3, name: 'Mursi', place: 'Kozhikkode'}
  ];
  return (
    <div className="App">
      {/* <Greet name={10}/>  Type 'number' is not assignable to type 'string'.*/}
      <Greet name="sufi" age={25} eligible={false} />
      <Person name={personData} />
      <PersonsList data={PersonsListData} />
      {/* pipes example */}
      <Status status="Error on fetching Data" />{' '}
      {/** we can't give another value {ex: give any random string will throw an error}except the given types in status component */}
      {/*** Practicing with children */}
      <Heading>Text as children</Heading>
      {/** Example of using Hoc (using another component as children) */}
      <Oscar>
        <Heading>Heading of Oscar</Heading>
      </Oscar>

      {/** Optional props example */}
      <Message name='Aseem'  isLoggedIn={true} messageCount={13}/>
    </div>
  );
}

export default App;
