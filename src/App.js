import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [cart, addToCart] = useState([]);
  let amount = 0;

  const productlist = [
    {
      "_id": "dress1",
      "title": "Dress 1",
      "image": "images/dress1.jpeg",
      "description": "About this dress",
      "prince": 300,
      "availableSizes": ["S", "M", "L", "XL"]
    },
    {
      "_id": "dress2",
      "title": "Dress 2",
      "image": "images/dress2.jpeg",
      "description": "About this dress",
      "prince": 250,
      "availableSizes": ["S", "M", "L", "XL"]
    },
    {
      "_id": "dress3",
      "title": "Dress 3",
      "image": "images/dress3.jpeg",
      "description": "About this dress",
      "prince": 350,
      "availableSizes": ["S", "M", "L", "XL"]
    },
    {
      "_id": "dress4",
      "title": "Dress 4",
      "image": "images/dress4.jpeg",
      "description": "About this dress",
      "prince": 600,
      "availableSizes": ["S", "M", "L", "XL"]
    }
  ]

  return (
    <div className="App">
      <div className='col-1'>
        {
          productlist.map((val, key) => {
            return (
              <div className='col'>
                <div className='cnt'>
                  <img src={require('./' + val.image)} />
                  <p>{val.title}</p>
                  <p>{val.description}</p>
                  <p>$ {val.prince}</p>
                  <button onClick={() => addTocartData(val)}>Add to cart</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='col-2'>
        {
          cart.map((val, key) => {
            amount = amount + parseInt(val.prince);
            return (
              <div className='col-cart'>
                <img src={require('./' + val.image)} />
                <p>{val.title}</p>
                <p>$ {val.prince}</p>
                <button onClick={() => removeTocartData(key)}>remove to cart</button>
              </div>
            )
          })
        }
        <div className='totalamount'>
          Total : $ {amount}
        </div>
      </div>
    </div>
  );

  function addTocartData(cartValue) {
    addToCart(oldArray => [...oldArray, cartValue]);
  }

  function removeTocartData(cartKey) {
    addToCart(cart.filter((item, key) => key !== cartKey));
  }
}

export default App;
