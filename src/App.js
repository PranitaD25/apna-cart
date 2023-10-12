import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const productList = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

  let [myProductList, setProductList] = useState(productList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...myProductList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...myProductList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity=()=>{
    let newProductList = [...myProductList];
    newProductList.map((products)=>{
      products.quantity=0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem=(index)=>{
    let newProductList = [...myProductList];
    let newTotalAmount = totalAmount;
    newTotalAmount-=newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem=(name,price)=>{
    let newProductList = [...myProductList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar productList={myProductList}/>
      <main className="container my-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={myProductList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
