import './App.css'
import NavBarRB from './components/NavBarRB'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
// prueba ItemDetailContainer
import ItemDetailContainer from './components/ItemDetailContainer'
// prueba ItemDetail
import ItemDetail from './components/ItemDetail'

function App() {
  return (
    <div className="main-bg-custom">
      <NavBarRB/>
      <ItemListContainer mensaje="Bienvenidos a la Tienda Online de Poseidon"/>

      {/* prueba ItemDetailContainer */}
     <ItemDetailContainer mensaje="prueba ItemDetailContainer"/>
           {/* prueba ItemDetail */}
     <ItemDetail mensaje="prueba ItemDetail"/>
    </div>
  )
}

export default App
