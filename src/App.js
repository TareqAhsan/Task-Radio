import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Stations from './components/stations/Stations';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';
import Addchanel from './components/Addchanel/Addchanel';
import ManageStation from './components/ManageStation/ManageStation';
import Editchanel from './components/Editchanel/Editchanel';

function App() {
  return (
    // <div className="App">
    //    <Stations/>
    // </div>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/addchanel" element={<Addchanel/>}/>
          <Route path="/dashboard/manage" element={<ManageStation/>}/>
          <Route path="/dashboard" element={<Stations/>}/>
          <Route path="/dashboard/edit/:id" element={<Editchanel/>}/>
        </Route>
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
