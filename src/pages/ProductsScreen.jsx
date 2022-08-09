import React, { useState, useEffect, useContext } from 'react';
import { API_PRODUCT_LOCAL, API_SEARCH_PRODUCT } from '../utils/const';
import ListProducts from '../components/home-page/ListProducts';
import { getAPI, postAPI, deleteAPI, putAPI } from '../utils/api';
import HomePage from '../components/home-page/HomePage';
import axios from 'axios';

export default function ProductsScreen() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAPI();

    }, [])
    // const fetchAPI = async () => {
    //     const result = await getAPI(API_PRODUCT_LOCAL);
    //     // check dữ dữ liệu trước khi lấy
    //     if (result) {
    //         setData(result)
    //     }
    // }


    const fetchAPI = async () => {
        const result = await axios.post(API_PRODUCT_LOCAL + "/filter", {});

        if (result) {
            setData(result.data)
        }
        console.log('result', result.data);
    }


    const onSearch = async (name) => {
        console.log(name);
        const result = await axios.get(API_SEARCH_PRODUCT + name);
        setData(result.data);
    };

    return (

        <div>
            <HomePage onSearch={onSearch} />
            {/* <CreatePost/>ee */}
            {data.length == 0 ? <div style={{textAlign:"center", fontSize:"24px", fontWeight:"450"}}>Không có sản phẩm</div> : <ListProducts post={data} />}

            <section className="contact">
                <div className="container-contact">
                    <div className="content-contact">
                        <h1>GP Shop</h1>
                        <p>Cập nhật thông tin về sản phẩm mới</p>
                        <div className="lienHe">
                            <a className="page" href="#"><span>FANFAGE</span></a>
                            <a className="ins" href="#"><span>INSTAGRAM</span></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
