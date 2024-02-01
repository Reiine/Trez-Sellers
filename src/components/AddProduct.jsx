import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie';

function AddProduct() {
    const [name, setPName] = useState("");
    const [des, setPDes] = useState("");
    const [price, setPPrice] = useState("");
    const [stock, setPStock] = useState("");
    const [hash, setPTags] = useState({});
    const [img, setImage] = useState(null);
    const [token,setToken] = useState('');

    const convertTags = (e) => {
        const tags = e.split(' ');
        setPTags(tags);
    }

    useEffect(() => {
        const storedToken = Cookies.get('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []); 

    const handleAddProduct = async () => {
        console.log(token);
        try {
            const response = await axios.post("http://localhost:3001/add-product", {
                name, des, hash, img, price, stock
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            console.log(response);
        } catch (error) {
            console.log("Error occurred");
        }
    }

    return (
        <div className="add-product-cover">
            <div className="login-cover">
                <div className="login-form">
                    <h1>Add Products</h1>
                    <label htmlFor="product-name">Product Name</label>
                    <input type="text" name="product-name" id="product-name" onChange={(e) => setPName(e.target.value)} />

                    <label htmlFor="product-description">Product Description</label>
                    <input type="text" name="product-description" id="product-description" onChange={(e) => setPDes(e.target.value)} />

                    <label htmlFor="product-price">Product Price</label>
                    <input type="text" name="product-price" id="product-price" onChange={(e) => setPPrice(e.target.value)} />

                    <label htmlFor="product-stock">Quantity Available</label>
                    <input type="text" name="product-stock" id="product-stock" onChange={(e) => setPStock(e.target.value)} />

                    <label htmlFor="product-tags">Tags (separated by spaces)</label>
                    <input type="text" name="product-tags" id="product-tags" onChange={(e) => convertTags(e.target.value)} />

                    <label htmlFor="product-image">Product Image (Link)</label>
                    <input type="text" name="product-image" id="product-image" onChange={(e) => setImage(e.target.value)} />

                    <Button variant="success" onClick={handleAddProduct}>Add</Button>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
