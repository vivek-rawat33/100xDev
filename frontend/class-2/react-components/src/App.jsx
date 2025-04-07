import React from "react";

function App() {
  return (
    <div>
      <CardWrapper>
        <CardWrapper>this is inner card 1</CardWrapper>
        <CardWrapper>this is inner card 2</CardWrapper>
        <CardWrapper>this is inner card 3</CardWrapper>
      </CardWrapper>
    </div>
  );
}
function CardWrapper({ children }) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        border: "2px solid black",
        padding: "10px",
      }}
    >
      <h4>This is a Card Wrapper</h4>
      {children}
    </div>
  );
}
export default App;
