import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import Request from './pages/Request';
import RejectList from './pages/RejectList';
import Setting from './pages/Setting';
import AddEmployee from './pages/AddEmployee';
import MyProfile from './pages/MyProfile';

const App = () => {
  return (
   <div>
    <BrowserRouter> 
    <Sidebar>
    <Routes>
      <Route path="/"element={<Dashboard/>}></Route>
      <Route path="/dashboard"element={<Dashboard/>}></Route>
      <Route path="/employeeList"element={<EmployeeList/>}></Route>
      <Route path="/request"element={<Request/>}></Route>
      <Route path="/addEmployee"element={<AddEmployee/>}></Route>
      <Route path="/rejectlist"element={<RejectList/>}></Route>
      <Route path="/setting"element={<Setting/>}></Route>
      <Route path="/myProfile"element={<MyProfile/>}></Route>
    </Routes>
    </Sidebar>
    </BrowserRouter>
   </div>
  );
};

export default App;

