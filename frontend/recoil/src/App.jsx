import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/Count";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Count />
        <IsEven />
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
      <button onClick={() => setcount((prev) => prev + 1)}>increase</button>
      <button onClick={() => setcount((prev) => prev - 1)}>decrease</button>
    </div>
  );
}
function IsEven() {
  const count = useRecoilValue(evenSelector);
  return <div>{!count ? "this is even" : ""}</div>;
}

export default App;
