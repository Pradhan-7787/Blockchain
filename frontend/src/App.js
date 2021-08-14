import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Screens/Home';
import Transactions from './Screens/Transactions';
import NavBar from './Components/NavBar';

const App = () => {
  return(
    <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/transaction' component={Transactions}/>
      </Switch>
    </>
  )
}

export default App;
