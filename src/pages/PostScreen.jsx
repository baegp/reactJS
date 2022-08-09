import React, { useState, useEffect, useContext } from 'react';
import CreatePost from '../components/admin-page/CreatePost';
import EditPost from '../components/admin-page/EditPost';
import axios from 'axios';
import ListPost from '../components/admin-page/ListPost'
import { API_CATEGORIES, API_PRODUCT_LOCAL } from '../utils/const';
import { getAPI, postAPI, deleteAPI, putAPI } from '../utils/api';
import { toast } from 'react-toastify';
import Header from '../components/header/Header';
export default function PostScreen() {
    const [data, setData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(undefined);
    const [brand, setBrand] = useState([]);
    const [openShowEdit, setOpenShowEdit] = useState(true);
    useEffect(() => {
        fetchAPI();
        console.log("hi");
        getListBrand();
    }, [])


    const fetchAPI = async () => {
        const result = await axios.post(API_PRODUCT_LOCAL + "/filter", {});

        if (result) {
            setData(result.data)
        }
        console.log('result', result.data);
    }

    const getListBrand = async () => {
        const brands = await axios.get(API_CATEGORIES)
        console.log('brand', brands);
        setBrand(brands.data)
    }

    console.log('list danh muc', brand);
    const onSubmit = async (data) => {
        const response = await axios.post(API_PRODUCT_LOCAL, data)
        if (response && response.status === 200) {
            toast.success('Them thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
            getListBrand();
        }
    }

    const onEdit = async (post) => {
        setSelectedPost(post)
        setOpenShowEdit(true);
        console.log('post', post)
        // console.log('select', selectedPost);
    }

    const onSubmitEdit = async (data) => {
        console.log(data);
        const response = await axios.post(API_PRODUCT_LOCAL, data)
        if (response && response.status === 200) {
            toast.success('Sua thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
        }
    }

    const onRemove = async (id) => {
        const response = await axios.delete(API_PRODUCT_LOCAL + `/${id}`)
        if (response && response.status === 200) {
            toast.success('Xoa thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
        }
    }

    return (
        <div>
            <CreatePost listBrand={brand} onSubmit={onSubmit} />
            {selectedPost && <EditPost item={selectedPost} listBrand={brand} onSubmit={onSubmitEdit} openShowEdit={openShowEdit} setOpenShowEdit={setOpenShowEdit} />}
            <ListPost brand={brand} onRemove={onRemove} onEdit={onEdit} post={data} />
        </div>
    )

}
