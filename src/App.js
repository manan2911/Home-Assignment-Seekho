import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Coupons,
  Artist,
  DiscountCard,
  Form,
  MainCards,
  Reviews,
  Series,
  Trending,
} from "./components/index.js";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://preprod.seekhoapp.com/api/v1.3/premium/premium-plans/?coupon_code=DEFAULT"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        //console.log({ data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <MainCards />
        <DiscountCard />
        <Coupons />
        <Series data={data.series_item} />
        <Artist />
        <Reviews />
        <Trending />
        <Form />
      </div>
    </div>
  );
}

export default App;
