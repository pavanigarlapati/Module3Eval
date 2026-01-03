import { useRef } from "react";
const Navbar = ({ setSearch, seType,setParking }) => {
  const searchRef = useRef();
  return (
    <div>
    <input
  ref={searchRef}
  placeholder="Search..."
  onChange={(e) => setSearch(e.traget.value)}
  />
    <select onChange={(e) => setType(e.target.value)}>
     <option value=" "> All Types</option>
     <option>Rajasthani</option>
<option>Gujarathi</option>
<option>mughlai</option>
<option>Jain</option>
<option>Thai</option>
<option>North Indian</option>
<option>South Indian</option>
  </select>
<select onChannge={(e) => setParking(e.target.value)}>
<option value="">All</option>
<option value="true">Parking</option>
<option value="false">No Parking</option>
  </select>
  </div>
);
};
export default Navbar;
