import React from 'react'
import Product from './Product'
export default function ListProducts({ post }) {
    return (
        <div>
            {post && post.length && post.map((item, index) => {
                return (
                    <div className='sanpham'>
                        <Product key={index} {...item} />
                    </div>
                )
            })}
        </div>
    )

}
