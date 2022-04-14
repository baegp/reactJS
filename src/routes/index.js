import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Cart from '../components/cart-page/Cart';
import Login from '../components/login/Login';
import PostCreen from '../pages/PostScreen';
import Register from '../components/login/Register';
import CategoryScreen from '../pages/CategoryScreen';
import ProductsScreen from '../pages/ProductsScreen';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PostDetail from '../pages/PostDetail';


const RouterScreen = () => {
    return (
        <Router>
            <ToastContainer />
            <Header />
            <Routes>
                <Route path="/" element={<ProductsScreen />} />

                {/* <Route path="/" element={<HomePage />} /> */}
                {/* <Route path="/" element={<Product />} /> */}
                <Route path="/admin" element={<PostCreen />} />
                <Route path="/categories" element={<CategoryScreen />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/product/:id" element={<PostDetail />} />

                <Route path="*" element={<h1>page not found</h1>} />

                {/* <Route path="/createpost" element={<CreatePost />} /> */}

            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterScreen;
