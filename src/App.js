import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from "./redux/actions/index";
import Button from '@material-ui/core/Button';

function App() {

  const counter = useSelector((state) => state.counter); 
  const auth = useSelector((state) => state.auth); 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Simple Counter</h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <Button color="primary" onClick={() => dispatch(increment())}>Increase</Button>
      <Button color="primary" onClick={() => dispatch(decrement())}>Decrease</Button>
      <Button color="primary" onClick={() => dispatch(reset())}>Reset</Button>

      <h2>Login test</h2>
      <p>Login In Please</p>
      <Button color="primary" onClick={() => dispatch(logIn())}>Login</Button>
      <Button color="primary" onClick={() => dispatch(logOut())}>Logout</Button>
      { auth ? (
        <div>
          <p>Logged in</p>
        </div>        
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
