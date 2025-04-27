import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import DashBoard from "./Pages/DashBoard";
import SendMoney from "./Pages/SendMoney";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/transfer" element={<SendMoney />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
