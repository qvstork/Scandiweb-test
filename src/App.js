
import ReactDOM  from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';


function App() {
  return (

<Router>
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
        </Routes>
</Router>

     );
}

export default App;
