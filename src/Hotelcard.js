import HotelList from './Hotelcardlist';
import useFetch from './useFetch';


const Hotelcard = () => {
  // destructuring using object instead of array because we can grab individuals without order
  const { data: hotels, isPending, error } = useFetch("http://localhost:8000/hotels");

  // return conditional rendering using logical && - if left hand side is true then output right ie once state (hotels) has a value - cycle through and render to the dom
  return (
    <div className="card">
      { error && <div>{error}</div>}
      { isPending && <div className="loading"></div>}
      { hotels && <HotelList hotels={hotels} title="Top Hotels of the world" />}
      { hotels && <HotelList hotels={hotels.filter((hotel) => hotel.country === "Colombia")} title="Colombian Hotels" />}
    </div>);
}

export default Hotelcard;