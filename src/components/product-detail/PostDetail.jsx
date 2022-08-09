import axios from 'axios';
import { formatMoney } from '../../abc';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../home-page/Product';
import './productDetail.css'
import { getAPI } from '../../utils/api';
import { API_PRODUCT_DETAIL, API_PRODUCT_LOCAL } from '../../utils/const';
import { addCart } from '../../store/actions';
import { useGlobalContext } from '../../context/globalContext';
import { toast } from 'react-toastify';
export default function PostDetail() {

    // const [state, dispatch] = useGlobalContext()

    const [post, setPost] = useState([]);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetchAPI()
    }, [id])

    const fetchAPI = async () => {
        const result = await getAPI(API_PRODUCT_DETAIL + id);
        if (result) {
            setPost(result)
        }
    }

    const [count, setCount] = useState(1)

    const handleClickTang = () => {
        setCount(count + 1)
    }

    const handleClickGiam = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }


    const onHandleAddCart = () => {
        let ListCart = []
        let check = true
        let ListCarTemp = localStorage.getItem("Cart")
        if (ListCarTemp != undefined) {
            ListCart = JSON.parse(ListCarTemp)
        }
        for (let i = 0; i < ListCart.length; i++) {
            if (ListCart[i].id == post.id) {
                ListCart[i].quantity = ListCart[i].quantity += count
                localStorage.setItem('Cart', JSON.stringify(ListCart))
                check = false
            }
        }
        if (check == true) {
            let cartItem = {
                quantity: count,
                name: post.name,
                image: post.image,
                price: post.price,
                id: post.id
            }
            console.log(ListCart);
            ListCart.push(cartItem)
            localStorage.setItem('Cart', JSON.stringify(ListCart))
        }

        toast.success('Da them vao gio hang', {
            position: 'bottom-left',
            autoClose: 3000
        })

    }

    if (post) {
        return (
            <div className='productDetail'>
                <div className='container-images-productDetail'>
                    <div className="imagesProductDetail">
                        <img style={{ width: '60%' }} src={post.image} alt="" />
                    </div>
                </div>
                <div className='main-item-productDetail'>
                    <div>
                        <div className="nameProductDetail"> {post.name}</div>
                        <div className="sao">
                            <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                        </div>
                        <div className="priceProductDetail">{formatMoney(post.price)}</div>
                    </div>
                    <div className='btnCount'>
                        <button onClick={handleClickGiam}>-</button>
                        <button >{count}</button>
                        <button onClick={handleClickTang} >+</button>
                    </div>
                    <button onClick={() => onHandleAddCart()} className="btn btnPrimary" >Them vao gio hang</button>
                </div>

            </div>

        )
    }
}

// onClick={() => {
//     dispatch(
//         addCart({
//             id: _id,
//             name,
//             price,
//             images:
//                 images.length > 0 ? images[0] : "https://via.placeholder.com/300",
//             quantity: 1,
//         })
//     )
// }} 