import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const UpadteRestaurant= () => {
  const { state } = useLocation();
  const navigate = useNavigate();
const [form, setForm] = useState(state);
const update = () => {
if (confirm("Are you sure you want to update?")) {
const data = JSON.parse(localStorage.getItem("evalData"));
const updated = data.map((r) =>
r.restaurantID === form.restaurantID ? form : r
);
localStorage.setItem("evalData", JSON.stringify(updated));
alert("Updated ssuccesfully");
navigate("/admin/dashboard");
}
};
return (
<div> <h2> Update Restaurant</h2>
<input value={form.restaurantName}
onChange={(e) => setForm({ ...form, restaurantName: e.taarget.value }))} />
  </div> 
);
};
export default UpdateRestaurant;




