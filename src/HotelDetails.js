import { useParams } from "react-router";
import useFetch from "./useFetch";
import room from "./room.svg"
import reaction from "./smiley.svg"
import percentage from "./percentage.svg"
import { useHistory } from "react-router-dom";

const HotelDetails = () => {

  const { id } = useParams();
  const { data: hotels, isPending, error } = useFetch("http://localhost:8000/hotels/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/hotels/" + hotels.id, {
      method: "DELETE"
    }).then(() => {
      console.log("hotel deleted")
      //  history.go(-1);
      history.push('/');
    })
  }
  return (
    <div className="hotel-details">
      { isPending && <div className="loading"></div>}
      { error && <div>{error}</div>}
      { hotels && (
        <article>
          <img style={{ minHeight: "250px", paddingTop: "10px" }} src={hotels.location} alt="Hotelimg" />
          <h2>{hotels.title}</h2>
          <img className="stars" src={hotels.stars} alt="stars" />
          <p>{hotels.description} </p>
          <p>{hotels.country}</p>
          <p>{hotels.region}</p>
          <span className="ratings"><strong className="ratingnumber">{hotels.rating}</strong> <img className="reaction" src={reaction} alt="reaction" /> (based on {hotels.ratingtext} reviews)</span>
          <hr />
          <div className="hotel-prices">
            <p><i>Price includes:</i></p>
            <p><img className="img-price-includes" src={room} alt="room" /> <span className="price-includes">{hotels.roomonly}</span></p>
            <p><img className="img-price-includes" src={percentage} alt="percentage" /> <span className="price-includes"> {hotels.charges}</span></p>
          </div>
          <div className="moreinfo">
            <span>
              <p className="moreinfotext">Total price from <h1>{hotels.totalprice}</h1> (Per person <strong>{hotels.perperson}</strong>)
                </p>
            </span>
          </div>
          <button onClick={handleClick}>Delete Hotel</button>
        </article>
      )}
    </div>
  );
}

export default HotelDetails;