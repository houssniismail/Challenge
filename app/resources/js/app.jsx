import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCategory from './components/categories/AddCategory';
import DisplayCategories from './components/categories/DisplayCategories';
import EditCategory from './components/categories/EditCategory';
import AddProduct from './components/products/AddProduct';
import DisplayProducts from './components/products/DisplayProducts';
import EditProduct from './components/products/EditProduct';
import Home from './components/Home';




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-category" element={<AddCategory />} />
                <Route path="/display-categories" element={<DisplayCategories />} />
                <Route path="/edit-category" element={<EditCategory />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/display-products" element={<DisplayProducts />} />
                <Route path="/edit-product" element={<EditProduct />} />
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
