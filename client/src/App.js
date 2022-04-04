import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import { Login } from './login/Login';
import { Users } from './users/Users';
import  CreateUser  from './createUser/CreateUser';
import  {Nav}  from './navbar/Nav';
import  Profile  from './profile/Profile';
import Odds from './odds/Odds';

function App() {
  return (
    <div>
      <Routes>
      <Route
          path='/'
          element={<Odds/>}
        />
        <Route
          path='/createuser'
          element={<CreateUser/>}
        />
        <Route
          path='/navbar'
          element={<Nav/>}
        />
        <Route
          path='/login'
          element={<Login/>}
        />
        <Route
          path='/success'
          element={<h1>WAGMI</h1>}
        />
        <Route
          path='/users'
          element={<Users/>}
        />

      </Routes>
    </div>
  );
}

export default App;