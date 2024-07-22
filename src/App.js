import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.jsx';
import MyForm from './components/form.jsx';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <MyForm>this is my form</MyForm>
      <h1>Are you appearing on the right page?</h1>
    </div>
  );
}

export default App;

