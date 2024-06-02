// import logo from './logo.svg';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ManageProduct from './Redux/Product';
import ManageUser from './Redux/User';
import ManageDasgboard from './Redux/Dasgboard';
import ManageAPI from './Redux/Api';
import ManageBook from './Redux/Book';

function App() {
  return (

    <>
    <HashRouter>
      <div className='container mt-4 '>
        <div  className='row justify-content-center'>
          <div className='col-lg-6'>
            <h1 className='text-danger text-center '>React and Redux</h1>
          </div>
          <div className='text-center mt-3'>
            <Link className='btn btn-primary me-3' to="/">Home</Link>
            <Link className='btn btn-success me-3' to="/product">Product</Link>
            <Link className='btn btn-info me-3' to="/user">User</Link>
            <Link className='btn btn-warning me-3' to="/book">Books</Link>
            <Link className='btn btn-secondary me-3' to="/dashboard">Dashboard</Link>
            <Link className='btn btn-primary me-3' to="/api">Manage APi</Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route exact path="/product" element={<ManageProduct />} />
        <Route exact path="/user" element={<ManageUser />} />
        <Route exact path="/dashboard" element={<ManageDasgboard/>} />
        <Route exact path="/api" element={<ManageAPI/>} />
        <Route exact path="/book" element={<ManageBook/>} />
      </Routes>
      </HashRouter>
      
    </>
  );
}

export default App;
