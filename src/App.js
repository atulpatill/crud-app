import './App.css';
import NavBar from './Components/NavBar';
import CodeForInterview from './Components/CodeForInterview';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
   
     <BrowserRouter>
    <NavBar />
 <Switch>
  <Route exact path="/" component={CodeForInterview}/>
  <Route exact path="/all" component={AllUsers}/>
  <Route exact path="/add" component={AddUser}/>
  </Switch>  
    </BrowserRouter>
 
  );
}

export default App;
