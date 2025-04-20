import React from "react";
import RevenueCard from "./components/RevenueCard";

function App() {
  return (
    <div className="grid grid-cols-3">
      <RevenueCard
        title={"Amount pending"}
        amount={"92,321.90"}
        orderCount={"43"}
      />
    </div>
  );
}

export default App;
