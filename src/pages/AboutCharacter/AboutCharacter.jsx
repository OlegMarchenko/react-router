import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AboutCharacter() {

  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const [data, setData] = useState({});
  const { name, gender, image, status, location } = data;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(json => setData(json));
  }, [id]);

  let locationId = location?.url.substring(location?.url.lastIndexOf('/') + 1);

  return (
    <div>
      <button onClick={goBack}>Back to previous page</button>
      <h1>{name}: {gender} {status}</h1>
      <img src={image} alt={name} />

      <Link to={`location/${locationId}`} style={{ display: 'block', color: 'red' }}>
        {location?.name}
      </Link>
    </div>
  )
}

export default AboutCharacter;