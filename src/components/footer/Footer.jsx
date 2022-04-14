import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
        <div>
           
            <section className="support">
                <div className="color">
                    <div className="container-sp">
                        <div className="sp-left">
                            <div className="thong-tin-web">
                                <h2>Về chúng tôi</h2>
                                <p>Website chính thức và duy nhất của MixiShop. Hiện tại chúng mình chỉ nhận đơn hàng trên
                                    website chứ không nhận bất kỳ nơi nào khác nhé!</p>
                            </div>
                        </div>
                        <div className="sp-center">
                            <div className="your-self">
                                <h2>Danh mục sản phẩm</h2>
                                <ul>
                                    <li><a href="#">Áo CSGO</a></li>
                                    <li><a href="#">Áo Mixi</a></li>
                                    <li><a href="#">Áo PUBG</a></li>
                                    <li><a href="#">Áo Refund Gaming</a></li>
                                    <li><a href="#">Đồ lưu niệm Mixi</a></li>
                                    <li><a href="#">Áo ba lỗ</a></li>
                                </ul>
                            </div>
                            <div className="your-self">
                                <h2>Thông tin</h2>
                                <ul>
                                    <li><a href="#">Giới thiệu </a></li>
                                    <li><a href="#">Chính sách bảo mật</a></li>
                                    <li><a href="#">Điều khoản</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sp-right">
                            <h2>Hỗ trợ</h2>
                            <p>Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage và Instagram</p>
                        </div>
                    </div>
                </div>
            </section>



            <footer id="footer">
                <a href="#">© Copyright HelpGuru. Powered by HeroThemes @ <span><strong>GP SHOP</strong></span></a>
            </footer>
        </div>
    )
}
