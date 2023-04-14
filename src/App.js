import "./App.css";

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
  return (
    <div className="App">
      <div className="App-header">
        <MainCards />
        <DiscountCard />
        <Coupons />
        <Series />
        <Artist />
        <Reviews />
        <Trending />
        <Form />
      </div>
    </div>
  );
}

export default App;
