import React, { useEffect, useState } from 'react'
import './Cart.css'
import { formatMoney } from './../../abc';
export default function Cart() {
    const [first, setfirst] = useState([])
    const [loading, setloading] = useState("")
    const [loadDelete, setloadDelete] = useState(1)

    useEffect(() => {
        let TempListCart = localStorage.getItem("Cart")
        if (TempListCart !== undefined) {
            let ListCart = []
            ListCart = JSON.parse(TempListCart)
            setfirst(ListCart)
        }
    }, [loading, loadDelete])

    let sum = 0
    first.map((item, index) => {
        sum += (Number(item.price) * Number(item.quantity))
    })

    const onQuantity = (quantity, id) => {
        for (let i = 0; i < first.length; i++) {
            let ListCart = first
            if (ListCart[i].id === id) {
                ListCart[i].quantity = quantity
                setloading(quantity)
                localStorage.setItem('Cart', JSON.stringify(ListCart))
                setfirst(ListCart)
            }
        }
    }

    const onhandleDelete = (id) => {
        let arr = JSON.parse(localStorage.getItem("Cart"));
        arr.splice(id, 1);
        setloadDelete(loadDelete + 1)
        localStorage.setItem('Cart', JSON.stringify(arr));
        console.log('xoa');
    }

    return (
        <main>
            <div className="danh-sach-sp">
                <div className="container-sp">
                    <div className="content-product">
                        <h1>Giỏ hàng của bạn</h1>
                        <div className="list-item-product">
                            <div className="item-product">
                                <h3>Hình ảnh</h3>
                            </div>
                            <div className="item-product">
                                <h3>Sản phẩm</h3>
                            </div>
                            <div className="item-product">
                                <h3>Đơn giá</h3>
                            </div>
                            <div className="item-product">
                                <h3>Số lượng</h3>
                            </div>
                            <div className="item-product">
                                <h3>Tổng tiền</h3>
                            </div>
                            <div className="item-product">
                                <h3>Thao tác</h3>
                            </div>
                        </div>
                    </div>
                    <div id="thong-tin-sp">
                        {first.map((item, index) => (
                            <div className="san-pham-mua">
                                <div className="item-sp">
                                    <div className="anh-san-pham">
                                        <img src={item.images} alt="" />

                                    </div>
                                </div>
                                <div className="item-sp">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="item-sp tien">
                                    <h3 id="don-gia">{formatMoney(item.price)}</h3>
                                </div>
                                <div className="item-sp">
                                    <input onChange={e => onQuantity(e.target.value, item.id)} defaultValue={item.quantity} type="number" name id="so-luong-${i}" min={1} />
                                </div>
                                <div className="item-sp ">
                                    <h3>{formatMoney(Number(item.price) * Number(item.quantity))}</h3>
                                </div>
                                <div className="item-sp">
                                    <i onClick={() => onhandleDelete(index)} className="far fa-trash-alt" />
                                </div>
                            </div>
                        ))}
                        <div className="thanh-toan">
                            <div className="tt-thanh-toan" />
                            <div className="tt-thanh-toan" />
                            <div className="tt-thanh-toan" />
                            <div className="tt-thanh-toan">
                                <h3>Tổng</h3>
                            </div>
                            <div className="tt-thanh-toan tien">
                                <h3>{formatMoney(Number(sum))}</h3>
                            </div>
                            <div className="tt-thanh-toan"> </div>
                        </div>


                    </div>
                </div>
            </div>



            <div className="infor-khach-hang">
                <div className="container-khach-hang">
                    <div className="content-khach-hang">
                        <h1>Mua hàng</h1>
                        <div className="form-khach-hang">
                            <form action id="form-infor">
                                <div className="thong-tin ">
                                    <label htmlFor="ho-ten">Họ tên</label>
                                    <input placeholder="Nhập họ và tên" type="text" name id="ho-ten" />
                                    <span className="form-messsage" />
                                </div>
                                <div className="thong-tin">
                                    <label htmlFor="sdt">Số điện thoại</label>
                                    <input placeholder="Nhập số điện thoại" type="number" name id="sdt" />
                                    <span className="form-messsage" />
                                </div>
                                <div className="thong-tin">
                                    <label htmlFor="email">Email</label>
                                    <input placeholder="Nhập email" type="email" name id="email" />
                                    <span className="form-messsage" />
                                </div>
                                <div className="thong-tin">
                                    <label htmlFor="address">Địa chỉ</label>
                                    <input placeholder="Nhập địa chỉ" type="text" name id="address" />
                                    <span className="form-messsage" />
                                </div>
                                <div className="thong-tin">
                                    <label htmlFor="time-nhan-hang">Thời gian nhận hàng trong ngày 8-18h</label>
                                    <input placeholder="Nhập thời gian nhận hàng trong ngày" type="text" name id="time-nhan-hang" />
                                    <span className="form-messsage" />
                                </div>
                                <button type="submit" className="btn btnPrimary" onclick="clickMuaHang()">Mua hàng</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main >

    )
}
