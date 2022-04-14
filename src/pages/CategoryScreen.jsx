import React, { useEffect, useState } from 'react'
import PostCategory from '../components/category/PostCategory'
import { getAPI } from '../utils/api';
import { API_PRODUCT_LOCAL } from '../utils/const';
import { toast } from 'react-toastify';
import axios from 'axios';
import ListPostCategory from './../components/category/ListPostCategory';
import EditCategoory from '../components/category/EditCategoory';
import CreateCategory from './../components/category/CreateCategory';
import { API_CATEGORIES } from './../utils/const';

function CategoryScreen() {
    const [data, setData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(undefined);
    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = async () => {
        const result = await getAPI(API_CATEGORIES);
        if (result) {
            setData(result)
        }
        console.log('categories:',result);
    }

    const onSubmit = async (data) => {
        const response = await axios.post(API_CATEGORIES, data)
        if (response && response.status === 200) {
            toast.success('Them thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
        }
    }

    const onEdit = async (post) => {
        setSelectedPost(post)
        console.log('post', post)
        // console.log('select', selectedPost);
    }

    const onSubmitEdit = async (data) => {
        console.log(data);
        const response = await axios.put(API_CATEGORIES + `/${data._id}`, data)
        if (response && response.status === 200) {
            toast.success('Sua thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
        }
    }

    const onRemove = async (id) => {
        const response = await axios.delete(API_CATEGORIES + `/${id}`)
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
            <CreateCategory onSubmit={onSubmit} />
            {selectedPost && <EditCategoory item={selectedPost} onSubmit={onSubmitEdit} />}
            <ListPostCategory onRemove={onRemove} onEdit={onEdit} post={data} />
        </div>
    )
}

export default CategoryScreen