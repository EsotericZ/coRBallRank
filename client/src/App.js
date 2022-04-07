import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Ranking from './components/ranking/Ranking';
import CreateUser from './components/createUser/CreateUser';
import Profile  from './components/profile/Profile';
import Odds from './components/odds/Odds';
import Events from './components/events/Events';
import History from './components/history/History';
import HomeNav from './components/homenav/HomeNav';


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
            path='/homeNav'
            element={<HomeNav />}
          />
          <Route
            path='/create'
            element={<CreateUser />}
          />
          <Route
            path='/odds'
            element={<Odds />}
          />
            <Route
            path='/profile'
            element={<Profile />}
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
            element={<Ranking />}
          >
          </Route>
          <Route
            path='/history'
            element={<History />}
          >
          </Route>
          <Route
            path='/events'
            element={<Events />}
          >
          </Route>
      </Routes>
    </div>
  );
}

export default App;