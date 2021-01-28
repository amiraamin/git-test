
import { Fragment } from 'react';
import './App.css';
import Home from './Component/beginSection/Home';
import Navbars from './Component/Navbar/Navbar';
import { Redirect, Route, Switch } from "react-router-dom";
import AllSahaba from './Component/allShaba/AllSahaba';
import AllSefat from './Component/AllSefat/Allsefat';
import OneSahaby from './Component/OneSahaby/OneSahaby';


function App() {
  return (
        <Fragment>

            
            <Switch>
              <Redirect exact from="/git-test" to="/home" />
              <Route  path="/home" component={Home} />
              <Route  path="/allSahaba" component={AllSahaba} />
              <Route path="/AllSefat" component={AllSefat} />
              <Route path="/oneSahaby/:id" component={OneSahaby} />
            </Switch>

        </Fragment>

  );
}

export default App;
