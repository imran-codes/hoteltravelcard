import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [roomonly, setRoomonly] = useState("Room Only");
  const [charges, setCharges] = useState("Room Only");
  const [location, setLocation] = useState("");
  const [stars, setStars] = useState("1");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("");
  const [ratingtext, setRatingtext] = useState("");
  const [totalprice, setTotalprice] = useState("£");
  const [perperson, setPerperson] = useState("£");
  //loads after we try to submit the form
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const hotelForm = { title, description, roomonly, charges, location, stars, country, region, rating, ratingtext, totalprice, perperson }
    setIsPending(true);
    fetch("http://localhost:8000/hotels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hotelForm)
    }).then(() => {
      setIsPending(false);
      // console.log("new hotel added")
      //  history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a new hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>Hotel title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Hotel Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Price includes (1st Option):</label>
        <select
          value={roomonly}
          onChange={(e) => setRoomonly(e.target.value)}
        >
          <option value="Room Only">Room Only</option>
          <option value="Room with Breakfast included">Room with Breakfast included</option>
          <option value="Local Charges Payable at Hotel">Local Charges Payable at Hotel</option>
          <option value="Free Parking for all guests">Free Parking for all guests</option>
          <option value="Free WiFi">Free WiFi</option>
          <option value="Spa and wellness centre included">Spa and wellness centre included</option>
          <option value="Private parking at the hotel">Private parking at the hotel</option>
          <option value="Restaurant & Bar">Restaurant & Bar</option>
          <option value="Swimming pool">Swimming pool</option>
          <option value="Room and Parking">Room and Parking</option>
        </select>
        <label>Price includes (2nd Option):</label>
        <select
          value={charges}
          onChange={(e) => setCharges(e.target.value)}
        >
          <option value="Room Only">Room Only</option>
          <option value="Room with Breakfast included">Room with Breakfast included</option>
          <option value="Local Charges Payable at Hotel">Local Charges Payable at Hotel</option>
          <option value="Free Parking for all guests">Free Parking for all guests</option>
          <option value="Free WiFi">Free WiFi</option>
          <option value="Spa and wellness centre included">Spa and wellness centre included</option>
          <option value="Private parking at the hotel">Private parking at the hotel</option>
          <option value="Restaurant & Bar">Restaurant & Bar</option>
          <option value="Swimming pool">Swimming pool</option>
          <option value="Room and Parking">Room and Parking</option>
        </select>


        <label>Image URL Link location:</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Stars Rating:</label>
        <select
          value={stars}
          onChange={(e) => setStars(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Country:</label>
        <input
          type="text"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label>Region:</label>
        <input
          type="text"
          required
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <label>Hotel Rating:</label>
        <input
          type="number"
          required
          min="1" max="10"
          step="any"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <label>Number of Reviews:</label>
        <input
          type="number"
          required
          min="1" max="1000"
          value={ratingtext}
          onChange={(e) => setRatingtext(e.target.value)}
        />
        <label>Total Price (£):</label>
        <input
          type="text"
          required
          value={totalprice}
          onChange={(e) => setTotalprice(e.target.value)}
        />
        <label>Price per Person (£):</label>
        <input
          type="text"
          required
          value={perperson}
          onChange={(e) => setPerperson(e.target.value)}
        />
        {!isPending && <button>Add Hotel</button>}
        {isPending && <button disabled>Adding Hotel</button>}
      </form>
    </div>
  );
}

export default Create;