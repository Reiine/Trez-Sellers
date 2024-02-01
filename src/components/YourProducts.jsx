import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
function YourProducts() {
    const [cartItems, setCartItems] = useState([]);
    const [token , setToken] = useState('');

    useEffect(() => {
        const storedToken = Cookies.get('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:3001/get-seller-products', {}, {
                    headers: {
                        authorization: 'Bearer ' + token
                    }
                });
                console.log(token);
                if (response.data && response.data.length !== undefined) {
                    setCartItems(response.data);
                } else {
                    console.log("Unexpected response format:", response.data);
                }
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };
    
        fetchData();
    }, [token]);
    

    return (
        <div className="your-products-cover">
            {cartItems.length === 0 ? (
                <div className="cartcover">
                    {!token ? (
                        <>
                            <p>Please Register/Login to see your products</p>
                            <div className="log-reg-btn">
                                <button className="btn btn-dark">
                                    <Link to={`/account/`}>Register</Link>
                                </button>
                                <button className="btn btn-dark">
                                    <Link to={`/account/login`}>Login</Link>
                                </button>
                            </div>
                        </>
                    ) : (
                        <h1>You haven't posted a product yet!</h1>
                    )}
                </div>
            ) : (
                <div className="logged-in-cart">
                    {token ? (
                        <>
                            <p>Your Products: </p>
                            {cartItems.map((item) => (
                                <div key={item._id} className="cart-item">
                                    <img src={item.img} alt="item" height={200} />
                                    <div className="item-name-des">
                                        <h6>{item.name}</h6>
                                        <p>{item.des}</p>
                                    </div>
                                    <div className="price-n-btn">
                                        <p>Rs. {item.price} Rs. {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="cartcover">
                            <p>Please Register/Login to access the cart</p>
                            <div className="log-reg-btn">
                                <button className="btn btn-dark">
                                    <Link to={`/account/signup`}>Register</Link>
                                </button>
                                <button className="btn btn-dark">Login</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default YourProducts;