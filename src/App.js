import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
    <Router>
      <div>
      <nav>
          <ul className='text-center'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/shop">
            <Shop></Shop>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
