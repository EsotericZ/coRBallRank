import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import BasicTable from './components/ranking/Ranking';
import CreateUser from './components/createUser/CreateUser';
import Profile  from './components/profile/Profile';
import Odds from './components/odds/Odds';

// THIS IS A TEST PAGE DELETE IT WHEN DONE WITH IT 
import Users from './users/Users';

const App = () => {
  return (
    <div>
      <Routes>
        <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/createuser'
            element={<CreateUser />}
          />
          <Route
            path='/odds'
            element={<Odds />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/success'
            element={<h1>WAGMI</h1>}
          />
          <Route
            path='/users'
            element={<Users />}
          />
          <Route
            path='/ranking'
            element={<BasicTable />}
          >
          </Route>
      </Routes>
    </div>
  );
}

export default App;