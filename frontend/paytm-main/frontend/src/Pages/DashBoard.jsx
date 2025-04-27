import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
export const DashBoard = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    async function fetchingBalance() {
      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setBalance(response.data.balance);
    }
    fetchingBalance();
  }, [balance]);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={Math.floor(balance)} />
        <Users />
      </div>
    </div>
  );
};
export default DashBoard;
