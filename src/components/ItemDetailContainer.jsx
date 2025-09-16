import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../mock/AsyncMockService'
const ItemDetailContainer = ({ mensaje }) => { 
  const { id } = useParams()

  const [Item, setItem] = useState(null)

  useEffect(() => {
    getItem(id)
      .then((res) => setItem(res))
      .catch((error) => console.log(error))
  }, [id])

  return (
    <div>
      <h1>{mensaje}</h1>
      {Item && (
        <div>
          <p>ID: {Item.id}</p>
          <p>Nombre: {Item.name}</p>
          <p>Descripción: {Item.description}</p>
          <p>Precio: {Item.price}</p>
          <p>Stock: {Item.stock}</p>
          <p>Categoría: {Item.category}</p>
          <img src={Item.image} alt="" />
        </div>
      )}
    </div>
  )
}

export default ItemDetailContainer
