
import { NavLink, Route, Routes } from 'react-router';
import './App.css';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserEdit from './UserEdit';

function App() {
 
  return (
    <>
    <ul className='list'>
      <li>
        <NavLink to="/">List</NavLink>
      </li>
      <li> <NavLink to="/add">Add User</NavLink></li>
    </ul>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<UserAdd/>}/>
        <Route path='/edit/:id'element={<UserEdit/>}/>
      </Routes>
  
    </>
  );
}

export default App;

