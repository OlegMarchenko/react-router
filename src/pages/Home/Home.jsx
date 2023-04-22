import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.scss';


function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(json => setData(json.results));
  }, []);



  return (
    <div className='list'>
      {
        data.map(({ id, name, status, image }) => (
          <div key={id} className='list__item'>
            <Link to={`about-character/${id}`} />
            <h1 className='list__item-name'>Name: {name} {status}</h1>
            <img className='list__item-image' src={image} alt={name} />
          </div>
        ))
      }
    </div>
  )
}

export default Home;