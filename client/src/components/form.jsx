import {useState} from 'react';
import { ReactDOM } from 'react-dom/client';

function MyForm() {
    
    const [clothesItem, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The item you entered was: ${clothesItem}`)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label> Enter clothing item parameters: 
          <input
            type="text" 
            value={clothesItem}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit"/>
      </form>
    )
  }

  export default MyForm;