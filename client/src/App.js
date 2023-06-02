import logo from './logo.svg';
import './App.css';
import ProductList from "./components/productList";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductList/>} />
            <Route path="/:_category" element={<ProductList />} />
          {/*<Route path="/login" element={<Login />} />*/}
        </Routes>
      </Router>
  );
}

export default App;
