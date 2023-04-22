import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Location() {

  const { locationId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [location, setLocation] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
    .then(response => response.json())
    .then(json => setLocation(json));
  }, [locationId]);



  return (
    <div>
      <button onClick={goBack}>Back to previous page</button>
      <h1>Location type: {location?.type}</h1>
      <h2>Location name: {location?.name}</h2>
    </div>
  )
}

export default Location;