import React, { useState } from 'react'
import Slider from "react-slick";

export default function HomePage({ onSearch }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [state, setState] = useState('')
    const onClickButton = (event) => {
        event.preventDefault();
        onSearch(state);
    }
    
    return (
        <div>
            <Slider {...settings}>
                {/* <div style={{width: "100%"}} >
                <img style={{width: "100%"}}  src={require("../../images/mixi.jpg")} alt="" />
            </div> */}
                <div style={{ width: "100%" }} >
                    <img style={{ width: "100%" }} src={require("../../images/mixitet.png")} alt="" />
                </div>
                <div style={{ width: "100%" }} >
                    <img style={{ width: "100%" }} src={require("../../images/mixitet.png")} alt="" />
                </div>
                <div style={{ width: "100%" }} >
                    <img style={{ width: "100%" }} src={require("../../images/mixitet.png")} alt="" />
                </div>

            </Slider >
            <div style={{ margin: '20px 20px 20px 20px' }}>
                <div>
                    tim kiem
                </div>
                <input onChange={(e) => setState(e.target.value)} type="text" />
                <button style={{marginLeft:'5px'}} className='btn btnPrimary' onClick={onClickButton}> tim kiem</button>
            </div>
        </div>
    )
}
