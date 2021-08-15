import { Route, Switch } from 'react-router-dom';
import Home from './Screens/Home';
import NavBar from './Components/NavBar';
import Blockchain from './Screens/Blockchain';
import ConductTransactions from './Screens/ConductTransactions';
import TransactionPool from './Screens/TransactionPool';


const App = () => {
  return(
    <>
    
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/blockchain' component={Blockchain}/>
      <Route path='/transaction' component={ConductTransactions}/>
      <Route path='/transaction-pool' component={TransactionPool}/>
      </Switch>
      
    </>
  )
}

export default App;
