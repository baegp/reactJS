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
import PostDetail from '../components/product-detail/PostDetail';
import AccountsScreen from './../pages/AccountsScreen';
import Page404 from '../components/page404/Page404';
import ForgetPassword from '../components/login/ForgetPassword';
import SignupForm from '../components/aTest/test';


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
                <Route path="/accounts" element={<AccountsScreen />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="/forgetpassword" element={<ForgetPassword/>} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/product/:id" element={<PostDetail />} />

                <Route path="*" element={<Page404 />} />
                <Route path="/test" element={<SignupForm/>} />

                {/* <Route path="/createpost" element={<CreatePost />} /> */}

            </Routes>
            <Footer />

        </Router>

    )
}

export default RouterScreen;
