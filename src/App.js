import "./App.css";
import React, { useEffect, useState } from "react";
//import { fetchData } from "./api/api";
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
        console.log({ data });
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
        {data.series_item && <Series data={data.series_item} />}
        {/*console.log("Creator item:", data.creator_item);*/}
        {data.creator_item && <Artist creatorItem={data.creator_item} />}
        {data.user_item && <Reviews reviewItem={data.user_item} />}
        <Trending />
        <Form />
      </div>
    </div>
  );
}

export default App;
