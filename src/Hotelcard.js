import React, { useState, useEffect } from 'react';
import HotelList from './Hotelcardlist';


const Hotelcard = () => {
  const [hotels, setHotels] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //return new filtered array based on current hotels array
  const handleLink = () => {
    alert("gone to view more page");
  }

  // run code on every render
  useEffect(() => {
    // setTimeout to show loading message for a second - This is to simulate if we was fetching data from an external api
    setTimeout(() => {
      fetch("http://localhost:8000/hotels")
        .then(res => {
          if (!res.ok) { // if response is not okay, throw new error
            throw Error('could not get the data. Please try again later');
          }
          return res.json()
        })
        .then((data) => {
          setIsPending(false);
          setHotels(data);
          setError(null);
        })
        .catch(err => {
          // Catches network error automatically
          setIsPending(false);
          setError(err.message);
        })
    }, 1000);
    //run once when dependency below is changed
  }, [])

  return (
    <div className="card">
      { error && <div>{error}</div>}
      { isPending && <div className="loading"></div>}
      { hotels && <HotelList hotels={hotels} title="All Hotels" handleLink={handleLink} />}
    </div>);
}

export default Hotelcard;