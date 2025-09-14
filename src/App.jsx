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

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/create-card' element={<CreateCard />} />
          <Route path='digital-business-cards' element={<CreateBusinessCard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
