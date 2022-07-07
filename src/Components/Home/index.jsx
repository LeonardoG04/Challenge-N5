import React from "react";
import Cart from "../Cart";
import Products from "../Products";
import './styles.modules.scss'

const Home = () => {
    return (
        <div className='home'>
            <Cart />
            <Products />
        </div>
    )
}

export default Home