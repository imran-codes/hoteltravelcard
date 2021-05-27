import room from "./room.svg"
import percentage from "./percentage.svg"
import reaction from "./smiley.svg"


//pass functions as props - use hotels data from parent component aka hotelcard - use the fetch data  
//props are from hotelcard - then can use in this list component 
const HotelList = ({ hotels, title, handleLink }) => {


  //the below is a reusable component across many pages by just dropping it in as done on hotelcard.js
  return (
    <div className="hotel-list">
      <h2 style={{ paddingLeft: "20px" }}> {title} </h2>

      {hotels.map(hotel => (
        // key attribute for each item in db - normally the id - cycle through using map for each hotel
        <div className="hotel-preview" key={hotel.id}>
          <img style={{ width: "100%" }} src={hotel.images.location} alt="Hotelimg" />
          <h2>{hotel.title}</h2>
          <img className="stars" src={hotel.images.stars} alt="stars" />
          <p className="region">{hotel.region}</p>
          <span className="ratings"><strong className="ratingnumber">{hotel.rating}</strong> <img className="reaction" src={reaction} alt="reaction" /> (based on {hotel.ratingtext} reviews)</span>
          <hr />
          <div className="hotel-prices">
            <p><i>Price includes:</i></p>
            <p><img className="img-price-includes" src={room} alt="room" /> <span className="price-includes">{hotel.roomonly}</span></p>
            <p><img className="img-price-includes" src={percentage} alt="percentage" /> <span className="price-includes"> {hotel.charges}</span></p>
          </div>
          <div className="moreinfo">
            <span>
              <p className="moreinfotext">Total price from <h1>{hotel.totalprice}</h1> (Per person <strong>{hotel.perperson}</strong>)<button className="moreinfobtn" onClick={handleLink}>View More</button></p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList;