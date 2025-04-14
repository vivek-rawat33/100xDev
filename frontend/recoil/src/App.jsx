import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/Count";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Count />
      </div>
    </RecoilRoot>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}
function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setcount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setcount((prev) => prev + 1)}>+</button>
      <button onClick={() => setcount((prev) => prev - 1)}>-</button>
    </div>
  );
}

export default App;
