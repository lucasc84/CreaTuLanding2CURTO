// App.jsx
import './App.css'
import NavBarRB from './components/NavBarRB'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main-bg-custom">
      <BrowserRouter>
        <NavBarRB />

        <Routes>
          {/* Home: todos los productos */}
          <Route
            path="/"
            element={<ItemListContainer mensaje="Bienvenidos a la Tienda Online de Poseidon" />}
          />

          {/* Categoría: lista filtrada */}
          <Route
            path="/categoria/:catId"
            element={<ItemListContainer mensaje="Productos por categoría" />}
          />

          {/* Detalle por id */}
          <Route
            path="/item/:id"
            element={<ItemDetailContainer mensaje="Detalle de producto" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
