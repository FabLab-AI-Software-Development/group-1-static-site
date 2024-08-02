import React, {useState, useEffect} from 'react';
import PantsButton from '../components/PantsButton.jsx';
import MyForm from '../components/form.jsx';


function Home() {

  const [count, setCount] = useState(0);


  return( <div><h1>Home</h1>
  <MyForm></MyForm>
  <PantsButton onClick={() => setCount(count + 1)}></PantsButton>
  <p>Conducted {count} searches</p>
  </div>
  );
}
  


  export default Home;