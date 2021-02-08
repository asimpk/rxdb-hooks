import React, {useEffect, useState} from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { Provider } from 'rxdb-hooks';
import {initializeDB} from "./utils/initializeDB"
import Home from './components/home'
import Statistics from "./components/Statistics"


function App() {
  const [db, setDb] = useState();
  useEffect(() => {
    // Notice that RxDB instantiation is asynchronous; until db becomes available
    // consumer hooks that depend on it will still work, absorbing the delay by
    // setting their state to isFetching:true
    const initDB = async () => {
      const _db = await initializeDB();
      setDb(_db);
    };
    initDB();
  }, []);

  return (
    <Provider db={db}>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/statistics" component={Statistics} />
      </Switch>
    </Provider>
  );
}

export default App;
