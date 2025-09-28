import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import CreateCard from "./pages/CreateCard";
import Layout from './layout/Layout';
import CreateBusinessCard from './pages/CreateBusinessCard';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';  
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import DashboardHome from './pages/dashboard/Home';
import Plans from './pages/dashboard/Plans';
import Customers from './pages/dashboard/Customers';
import Cards from './pages/dashboard/Cards';
import Settings from './pages/dashboard/Settings';
import TestTemes from './pages/dashboard/Themes';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/create-card' element={<CreateCard />} />
        </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/dashboard' element={<DashboardHome />} />
          <Route path='/dashboard/plans' element={<Plans />} />
          <Route path='/dashboard/customers' element={<Customers />} />
          <Route path='/digital-business-cards' element={<CreateBusinessCard />} />
          <Route path='/dashboard/cards' element={<Cards />} />
          <Route path='/dashboard/settings' element={<Settings />} />
          <Route path='/dashboard/themes' element={<TestTemes />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
