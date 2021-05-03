import logo from './logo.svg';
import './App.css';
import { Button, Form, FormControl, TextField } from '@material-ui/core' 
import EmpForm from './EmpForm'

const App = () => {
  return (
    <div>
      <FormControl>
        <EmpForm/>
      </FormControl>
    </div>
  );
}

export default App;


