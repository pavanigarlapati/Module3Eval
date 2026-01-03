import {useEffect, UseState } from "react";
import RestaurantCrad from "../components/RestaurantCard";
import Navbar from "../components/Navbar";
const CustomerDashboard =() => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setDta(JSON.parse(localStorage.getItem("evalData")) || []);
  }, []);
  return (
    <div> <Navbar />
  {data.map((r) => (
    <RestaurantCard key ={r.rstaurantID} data={r} />
    ))}
  </div>
);};
export default CustomerDasboard;
