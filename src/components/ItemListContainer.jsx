import { useState, useEffect} from 'react'
import {getProducts} from '../mock/AsyncMockService'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = ({mensaje}) => {

      const { catId } = useParams()

    const [data, setData] = useState([])

useEffect(() => {
    getProducts()
      .then((res) => {
        setData(catId ? res.filter(p => p.category === catId) : res)
      })
      .catch((error) => console.log(error))
  }, [catId])

    return(
    <div>
        <h1>{mensaje}</h1>
        <ItemList data={data}/>
    </div>
    )
  }
  
  export default ItemListContainer