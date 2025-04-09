import React, { useCallback, useMemo, useState } from "react";
//usememo
function App() {
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(0);
  let count = useMemo(() => {
    let count = 0;
    console.log("this is memo");
    for (let i = 1; i <= sum; i++) {
      count += i;
    }
    return count;
  }, [sum]);

  //usecallback

  const Demo = useCallback(function () {
    return 1;
  }, []);
  return (
    <div>
      <input
        placeholder="sum"
        type="number"
        onChange={(e) => {
          setSum(e.target.value);
        }}
      ></input>
      <p>sum is {count}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter {counter}
      </button>

      <DemoComponent Demo={Demo} />
    </div>
  );
}

const DemoComponent = React.memo(function DemoComponent({ Demo }) {
  console.log("this is demo ");
  return <div>this is DemoComponent</div>;
});
export default App;
