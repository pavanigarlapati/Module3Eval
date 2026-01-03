const RestaurantCard = ({ data, isAdmin, onDelete, onUpdate }) => {
return (
<img src={data.img} width="150" />
  <h3>{dta.restaurantName}</h3>
<p>{data.address}</p>
<p>{data.type}</p>
<p>Parking: {data.parkingLot ? "Yes" : "No"}</p>
{isAdmin && (
  <>
  <button onClick ={() => onUpdate(data)}>Update</button>
   <button onClick ={() => onDelete(data.restaurantID)}>Delete</button>
  </>
)}
</div>
);
};
export default ReastaurantCard;
