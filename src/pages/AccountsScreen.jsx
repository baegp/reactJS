import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import ListPostCategory from './../components/category/ListPostCategory';
import EditCategoory from '../components/category/EditCategoory';
import CreateCategory from './../components/category/CreateCategory';
import { API_USER_REGISTER, API_USER_UPDATE } from './../utils/const';
import { getAPI } from '../utils/api';
import EditAccount from './../components/accounts/EditAccount';
import ListAccounts from './../components/accounts/ListAccounts';

export default function AccountsScreen() {
    const [data, setData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(undefined);
    const [openShowEdit, setOpenShowEdit] = useState(true);
    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = async () => {
        const result = await getAPI(API_USER_REGISTER);
        if (result) {
            setData(result)
        }
        console.log('categories:', result);
    }

    const onSubmit = async (data) => {
        const response = await axios.post(API_USER_REGISTER, data)
        if (response && response.status === 200) {
            toast.success('Them thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
        }
    }

    const onEdit = (post) => {
        setSelectedPost(post)
        setOpenShowEdit(true);
        // console.log('select', selectedPost);
    }

    const onSubmitEdit = async (data) => {
        console.log(data);
        const response = await axios.post(API_USER_UPDATE, data)
        if (response && response.status === 200) {
            toast.success('Sua thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
        }
    }

    const onRemove = async (id) => {
        const response = await axios.delete(API_USER_REGISTER + `/${id}`)
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
            {selectedPost && <EditAccount item={selectedPost} onSubmit={onSubmitEdit} openShowEdit={openShowEdit} setOpenShowEdit={setOpenShowEdit} />}
            <ListAccounts onRemove={onRemove} onEdit={onEdit} post={data} />
        </div>
    )
}
