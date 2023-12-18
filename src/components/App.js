// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import TaskForm from './TaskForm';
import Login from './auth/Login';
import Signup from './auth/Signup';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/tasks" element={<TaskForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
