import { Routes, Route } from 'react-router-dom';
import CreateUser from './components/createUser/CreateUser';
import Contact from './components/contact/Contact';
import Events from './components/events/Events';
import History from './components/history/History';
import Home from './components/home/Home';
import Odds from './components/odds/Odds';
import Profile  from './components/profile/Profile';
import Ranking from './components/ranking/Ranking';

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
            path='/home'
            element={<Home />}
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
          {/* <Route
            path='/events'
            element={<Events />}
          > */}
          <Route
            path='/contact'
            element={<Contact />}
          >
          </Route>
      </Routes>
    </div>
  );
}

export default App;