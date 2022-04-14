import React from 'react'
import "./Product.css"
import { formatMoney } from '../../abc';
import { Link } from 'react-router-dom';
export default function Product({ images, name, price ,_id}) {
    return (
        <Link to={`/product/${_id}`}>
            <div className="img">
                <img src={images} alt="" />
            </div>
            <div className="ten">
                {name}
            </div>
            <div className="sao">
                <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
            </div>
            <div className="gia">
                {formatMoney(price)}
            </div>
        </Link>


    )
}
