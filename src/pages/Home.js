import React, {useState, useEffect} from 'react';
import SearchButton from '../components/SearchButton.jsx';


function Home() {

  const [count, setCount] = useState(0);


  return( <div><h1>Home</h1>
  <SearchButton onClick={() => setCount(count + 1)}></SearchButton>
  <p>Conducted {count} searches</p>
  </div>
  );
}
  


  export default Home;