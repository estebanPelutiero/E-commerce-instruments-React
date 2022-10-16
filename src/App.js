import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
     <NavBar /> 
     <ItemListContainer greeting="Bienvenidos a mi tienda de instrumentos!"/>
    </>
  );
}

export default App;
