import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import { Login } from './login/Login';
import { Users } from './users/Users';
import { Ranking } from './ranking/Ranking';
import { CreateUser } from './createUser/CreateUser';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<CreateUser/>}
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
        <Route
          path='/ranking'
          element={<Ranking/>}
        >
        </Route>

      </Routes>
    </div>
  );
}

export default App;