
import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./Product";
import { useState } from "react";
import bg from "../../images/bg.jpg";
import "./Shop.css";


export const Shop = ({searchQuery ,login}) => {

  const [category, setCategory] = useState("All");
  
  const [filteredPatient, setFilteredPatient] = useState([]);


  const filteredProducts = PRODUCTS.filter((product) => {
    if (category === "All") {
      return true;
    } else {
      return product.category === category;
    }
  }).filter((product) => {
    return product.productName.toLowerCase().includes(searchQuery.toLowerCase());
  });

 

  return (
    <div className="shop">

      
      <div className="shopTitle">
      <button onClick={() => setCategory("All") }>  <p>All</p> </button>
        <button onClick={() => setCategory("Canned Goods")}>    Canned Goods</button>
        <button onClick={() => setCategory("Beverages") }>     Beverages </button>
        <button onClick={() => setCategory("Personal Care")}>     Personal Care </button>
        <button onClick={() => setCategory("Frozen") }>    Frozen </button>
        <button onClick={() => setCategory("Condiments") }>     Spices and Condiments</button>
        <button onClick={() => setCategory("Snacks") }>     Snacks</button>
        <button onClick={() => setCategory("Other") }> Other </button>
      </div>

      <div className="products">
  {filteredPatient.length > 0 ?
    filteredPatient.map((product)=>(
      <Product data={product} login={login}/>
    ))
    : 
    filteredProducts.map((product) => (
      <Product key={product.id} data={product} login={login}/>
    ))
  }
</div>
    </div>
  );
};