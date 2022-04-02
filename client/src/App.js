import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import { Login } from './login/Login';
import { Users } from './users/Users';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
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