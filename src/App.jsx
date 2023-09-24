import { useState, useEffect } from 'react';

import './App.css'
import axios from 'axios';
import Tour from './components/Tour';

function App() {

  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/comments';

  const removeList = (id) => {
    let filterData = tour.filter((item) => item.id != id);
    setTour(filterData);
  }

  const fetchCountry = async (url) => {
    axios.get(url).then(res=> {
      setLoading(false);
      setTour(res.data);
    });
  }



  useEffect(() => {
    
    fetchCountry(url);
  }, []);

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (tour.length === 490) {
    return (
     <div>
       <p>There has no data</p>
      <button className="refreshBtn" onClick={() => {
        setLoading(true);
        fetchCountry(url)
      }}>Refresh</button>
     </div>
    )
  } else {
    return (
      <>
        <Tour tour={tour} removeList={removeList} />
      </>
    )
  }

 
}

export default App
