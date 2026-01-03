import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard":
const AdminDashboard = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("evalData")) || []
    );
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "",
    parkingLot: "",
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"});
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("evalData", JSON.stringify(data));
  }, [data]);
  const addRestaurant = () => {
    if (!form.restaurantName || !form.address|| !form.type) {
      alert("All fields required");
      return;
    }
    const newRes = {
      ...form, restaurantID: Date.now(),
      parkingLot: form.parkingLot === "true",
    };
    setData([...data, newRes]);
    alert("Restaurant Added");
    setForm({ ...form, restaurantName: "", address: "" });
  };
  const deleteRes = (id) => {
    if(confirm("Are you sure you want to delte?")) {
      setData(data.filter((r) => r.restaurantID !== id));
      alert("Deleted SuccesFully");
    }
  };
  return (
    <div> <Navbar />
    <h2> Add Restaurant</h2>
  <input placeholder="Name"
  onChange={(e) => setForm({ ...form, restaurantName: e.target.value })} />
    <input placeholder="Address"
  onChange={(e) => setForm({ ...form, type: address: e.target.value })} />
  <select onChange{(e) => setForm({ ...form, type: e.target.value })}>
<option value="">Select Type</option>
<option>Rajasthani</option>
<option>Gujarathi</option>
<option>Mughlai</option>
<option>Jain</option>
<option>Thai</option>
<option>North Indian</option>
<option>South Indian</option>
  </select>
<button> onClick={addRestaurant}>Add</button>
<data.map((r)=> (
  <RestaurantCard
          key={r.restaurantID}
data={r}
isAdmin
onDelete={deleteRes}
onUpdate={() => navigate("/admin/restaurants/update", { state: r })}
/>
  ))}
  </div>
);
};
export default AdminDashboard;
